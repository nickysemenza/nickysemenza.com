---
title: Quick Let's Encrypt Certificates with Certbot's Cloudflare DNS plugin
pubDate: 'Jan 01 2019'
tags: ['code']
---

I use Let's Encrypt often to generate valid publicly trusted certificates for testing, but DCV can be annoying to do over and over again. In a production environment, i'd use certbot's nginx or apache plugin to serve http DCV tokens, but I do this on my laptop for daily use, without wanting to expose a server. Luckily certbot [has plugins](https://certbot.eff.org/docs/using.html#dns-plugins) that will automatically place TXT validation records for you, using your DNS provider's (e.g. Cloudflare) API. Unfortunately they only work on some variants of linux, and not on macOS. Docker to the rescue!

first, we need to create the conf file with our credentials:

```bash
mkdir -p ~/certbot_data/conf

cat >~/certbot_data/conf/cloudflare.ini <<'EOF'
dns_cloudflare_email = "your-cloudflare-email"
dns_cloudflare_api_key = "your-cloudflare-api-key"
EOF
```

once that exists, we can run it in docker, mounting it a lib folder for data, and an etc folder where it will output the cert.

```bash
sudo docker run -it --rm --name certbot \
    -v "/Users/$USER/certbot_data/conf:/conf" \
    -v "/Users/$USER/certbot_data/etc/letsencrypt:/etc/letsencrypt" \
    -v "/Users/$USER/certbot_data/var/lib/letsencrypt:/var/lib/letsencrypt" \
    certbot/dns-cloudflare certonly
```

You'll be asked for the ACME authentication method, pick dns-cloudflare. You'll also have to enter your email and agree to the terms, then finally enter in your hostname(s), and when asked `Input the path to your Cloudflare credentials INI file (Enter 'c' to cancel)`, enter `/conf/cloudflare.ini`

and voila, you should get a cert returned to you!

```bash
$ head certbot_data/etc/letsencrypt/live/foo1.nickysemenza.com/cert.pem
-----BEGIN CERTIFICATE-----
MIIFYjCCBEqgAwIBAgISBLppuUL9+aW4cpZhJ/Rj/sTzMA0GCSqGSIb3DQEBCwUA
MEoxCzAJBgNVBAYTAlVTMRYwFAYDVQQKEw1MZXQncyBFbmNyeXB0MSMwIQYDVQQD
ExpMZXQncyBFbmNyeXB0IEF1dGhvcml0eSBYMzAeFw0xOTAxMTYwNTUxMjhaFw0x
OTA0MTYwNTUxMjhaMCAxHjAcBgNVBAMTFWZvbzEubmlja3lzZW1lbnphLmNvbTCC
ASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALZV7XHPEq5xDnbxPB/34Y+a
2sbMCno4B0LZm3OvTkGdyHxM7+ahEwfE6nzqHjqIrg2AV/VYOmKBDZF/9odvtrTb
Rvt8oklVD+kHV9liNXIfZNd6XYo2pAI7EgETEUtJMXSTXAIJMGHFmhOOsw4rja12
9NyOsDteQ04fT/gIkiiqCvXhrtrZmcdGcJsh7qQxtLo1ohW4/XCvZ9JvjcRGaoW8
Tz7CiMFmLYrIP03cjQwaiVm6WG2XCTSoM5vLadhQBTObdoW1zRBy4ijrBkNnCwfw
```

here's the full output

```
Saving debug log to /var/log/letsencrypt/letsencrypt.log

How would you like to authenticate with the ACME CA?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
1: Obtain certificates using a DNS TXT record (if you are using Cloudflare for
DNS). (dns-cloudflare)
2: Spin up a temporary webserver (standalone)
3: Place files in webroot directory (webroot)
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Select the appropriate number [1-3] then [enter] (press 'c' to cancel): 1
Plugins selected: Authenticator dns-cloudflare, Installer None
Enter email address (used for urgent renewal and security notices) (Enter 'c' to
cancel): [REDACTED]

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Please read the Terms of Service at
https://letsencrypt.org/documents/LE-SA-v1.2-November-15-2017.pdf. You must
agree in order to register with the ACME server at
https://acme-v02.api.letsencrypt.org/directory
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(A)gree/(C)ancel: a

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Would you be willing to share your email address with the Electronic Frontier
Foundation, a founding partner of the Let's Encrypt project and the non-profit
organization that develops Certbot? We'd like to send you email about our work
encrypting the web, EFF news, campaigns, and ways to support digital freedom.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(Y)es/(N)o: y
Please enter in your domain name(s) (comma and/or space separated)  (Enter 'c'
to cancel): foo1.nickysemenza.com
Obtaining a new certificate
Performing the following challenges:
dns-01 challenge for foo1.nickysemenza.com
Input the path to your Cloudflare credentials INI file (Enter 'c' to cancel): /conf/cloudflare.ini
Unsafe permissions on credentials configuration file: /conf/cloudflare.ini
Unsafe permissions on credentials configuration file: /conf/cloudflare.ini
Waiting 10 seconds for DNS changes to propagate
Waiting for verification...
Cleaning up challenges

IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/foo1.nickysemenza.com/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/foo1.nickysemenza.com/privkey.pem
   Your cert will expire on 2019-04-16. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot
   again. To non-interactively renew *all* of your certificates, run
   "certbot renew"
 - Your account credentials have been saved in your Certbot
   configuration directory at /etc/letsencrypt. You should make a
   secure backup of this folder now. This configuration directory will
   also contain certificates and private keys obtained by Certbot so
   making regular backups of this folder is ideal.
 - If you like Certbot, please consider supporting our work by:

   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le

 - We were unable to subscribe you the EFF mailing list because your
   e-mail address appears to be invalid. You can try again later by
   visiting https://act.eff.org.

```

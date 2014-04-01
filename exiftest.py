from PIL import Image
from PIL.ExifTags import TAGS
# Open image file for reading (binary mode)
f = open('static/images/portfolio/food-1.jpg', 'rb')


def get_exif(fn):
    ret = {}
    i = Image.open(fn)
    info = i._getexif()
    for tag, value in info.items():
        decoded = TAGS.get(tag, tag)
        ret[decoded] = value
    return ret

print get_exif('static/images/portfolio/food-1.jpg')
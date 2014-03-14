from flask import Flask, render_template, request, redirect
import os

app = Flask(__name__)
app.config.from_object(__name__)

app.config.update(dict(
    DATABASE=os.path.join(app.root_path, 'flaskr.db'),
    DEBUG=True,
    SECRET_KEY='development key',
    SERVER_PORT=4000
))
class Object(object):
    pass

@app.before_request
def remove_trailing_slash():
    if request.path != '/' and request.path.endswith('/'):
        return redirect(request.path[:-1])

@app.route("/")
def homepage():
    return render_template('home.html')
@app.route("/videos")
def videoPortfolio():
    return render_template('videos.html')
@app.route("/photos")
@app.route("/photos/<photocategory>")
def photoPortfolio(photocategory="all"):
    return render_template('photos.html')


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.run(port=app.config.get('SERVER_PORT'))

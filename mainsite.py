from flask import Flask, render_template
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
@app.route("/")
def homepage():
    return render_template('home.html')
@app.route("/videos")
def videoPortfolio():
    return render_template('videos.html')
@app.route("/photos")
def photoPortfolio():
    return render_template('photos.html')


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.run(port=app.config.get('SERVER_PORT'))

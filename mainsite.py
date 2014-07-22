from flask import Flask, render_template, request, redirect, g
import os, random, math
from sqlite3 import dbapi2 as sqlite3
from flask.ext.assets import Environment, Bundle

app = Flask(__name__)
app.config.from_object(__name__)
#app.config['ASSETS_DEBUG'] = True

assets = Environment(app)
js_min = Bundle('js/bootstrap.min.js',
            filters='rjsmin', output='js/min.js')
assets.register('js_min', js_min)

css_min = Bundle('css/custom.css',
                 'css/bootstrap.min.css',
                      filters='yui_css', output='css/min.css')
assets.register('css_min', css_min)

app.config.update(dict(
    DATABASE=os.path.join(app.root_path, 'flaskr.db'),
    DEBUG=True,
    SECRET_KEY='development key',
    SERVER_PORT=4000
))


def connect_db():
    """Connects to the specific database."""
    rv = sqlite3.connect(app.config['DATABASE'])
    rv.row_factory = sqlite3.Row
    return rv


def get_db():
    """Opens a new database connection if there is none yet for the
    current application context.
    """
    if not hasattr(g, 'sqlite_db'):
        g.sqlite_db = connect_db()
    return g.sqlite_db


def getPicsFromCat(pics, cat):
    finalPics=[]
    for eachPic in pics:
        if(eachPic[3]==cat):
            finalPics.append(eachPic)
    return finalPics


@app.teardown_appcontext
def close_db(error):
    """Closes the database again at the end of the request."""
    if hasattr(g, 'sqlite_db'):
        g.sqlite_db.close()



@app.before_request
def remove_trailing_slash():
    if request.path != '/' and request.path.endswith('/'):
        return redirect(request.path[:-1])

@app.route("/")
def homepage():
    return render_template('home.html')
@app.route("/videos")
def videoPortfolio():

    db = get_db()
    cur = db.execute('select title, subtitle, description, url from videos order by id asc')
    entries = cur.fetchall()
    return render_template('videos.html',videos=entries)

@app.route("/software")
def softwarePortfolio():
    return render_template('software.html')
@app.route("/resume")
def resume():
    return redirect('static/files/nickysemenza_resume.pdf')
@app.route("/about")
def aboutMe():
    return render_template('about.html')
@app.route("/test")
def test():
    return render_template('test.html')
@app.route("/photos")
@app.route("/photos/<photocategory>")
def photoPortfolio(photocategory="all"):
    path, file = os.path.split(os.path.realpath(__file__))
    path=path+'/static/images/portfolio/'
    allpics=[]
    for root, _, files in os.walk(path):
        for f in files:
            if(f.__contains__('_thumb')==False and f.__contains__('.jpg')):
                    category = str(f).split('-', 1 )[0]
                    t= [f,'title','description',category]
                    allpics.append(t)

    photosidebar=[
    ('/', 'all', 'All'),
    ('people', 'people', 'People'),
    ('nature','nature','Nature'),
    ('travel','travel','Travel'),
    ('events','events','Events'),
    ('food', 'food', 'Food')]

    if(photocategory in ['people','nature','travel','events','food']):
        photos=getPicsFromCat(allpics,photocategory)
    else:
        #photos=sorted(allpics, key=lambda k: random.random())
        photos=allpics

    picsPerPage = 20.0
    picCount = (len(allpics))
    pageCount = math.ceil(picCount/picsPerPage)

    return render_template('photos.html',photocategory=photocategory,sidebar=photosidebar,photos=photos)

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.run(port=app.config.get('SERVER_PORT'))




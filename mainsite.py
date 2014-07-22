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
                      filters='cssmin', output='css/min.css')
assets.register('css_min', css_min)

app.config.update(dict(
    DEBUG=True,
    SERVER_PORT=4000
))



def getPicsFromCat(pics, cat):
    finalPics=[]
    for eachPic in pics:
        if(eachPic[3]==cat):
            finalPics.append(eachPic)
    return finalPics
@app.before_request
def remove_trailing_slash():
    if request.path != '/' and request.path.endswith('/'):
        return redirect(request.path[:-1])

@app.route("/")
def homepage():
    return render_template('home.html')
@app.route("/videos")
def videoPortfolio():
    videos=[
        ('Harker Class of 2014 Spirit Montage','Spirit Montage','A montage of various senior class spirit activities over the course of the school year','//youtube.com/embed/9RBYU7D77MM'),
        ('Harker Homecoming 2013','Spirit Montage Video','A short film depicting the spirit of the Fall Homecoming festivities.','//www.youtube.com/embed/_-cqOsKXP70'),
        ('Harker Summer Camp: Mud Day','Fun in the sun with mud!','Campers enjoy a bright summer day in the mud!','//www.youtube.com/embed/vvyLSgLj58w')
    ]
    return render_template('videos.html',videos=videos)

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




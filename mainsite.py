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
@app.route("/software")
def softwarePortfolio():
    return render_template('software.html')
@app.route("/about")
def aboutMe():
    return render_template('about.html')
@app.route("/photos")
@app.route("/photos/<photocategory>")
def photoPortfolio(photocategory="all"):
    print(photocategory)
    photosidebar=[
    ('/', 'all', 'All'),
    ('people', 'people', 'People'),
    ('nature','nature','Nature'),
    ('travel','travel','Travel'),
    ('events','events','Events'),
    ('food', 'food', 'Food')]

    foodphotos=[
        ('food-1.jpg','test title 1', 'long description','category'),
        ('food-2.jpg','test title 1', 'long description','category'),
        ('food-3.jpg','test title 1', 'long description','category'),
        ('food-4.jpg','test title 1', 'long description','category'),
        ('food-5.jpg','test title 1', 'long description','category'),
        ('food-6.jpg','test title 1', 'long description','category'),
        ('food-7.jpg','test title 1', 'long description','category'),
        ('food-8.jpg','test title 1', 'long description','category'),
        ('food-9.jpg','test title 1', 'long description','category'),
        ('food-10.jpg','test title 1', 'long description','category'),
        ('food-11.jpg','test title 1', 'long description','category'),
        ('food-12.jpg','test title 1', 'long description','category'),
        ('food-13.jpg','test title 1', 'long description','category'),
        ('food-14.jpg','test title 1', 'long description','category'),
        ('food-15.jpg','test title 1', 'long description','category'),
        ('food-16.jpg','test title 1', 'long description','category')
    ]
    peoplephotos=[
        ('people-1.jpg','test title 1', 'long description','category'),
        ('people-2.jpg','test title 1', 'long description','category'),
        ('people-3.jpg','test title 1', 'long description','category'),
        ('people-4.jpg','test title 1', 'long description','category'),
        ('people-5.jpg','test title 1', 'long description','category'),
        ('people-6.jpg','test title 1', 'long description','category')
    ]
    eventphotos=[
        ('events-1.jpg','test title 1', 'long description','category'),
        ('events-2.jpg','test title 1', 'long description','category'),
        ('events-3.jpg','test title 1', 'long description','category'),
        ('events-4.jpg','test title 1', 'long description','category'),
        ('events-5.jpg','test title 1', 'long description','category'),
        ('events-6.jpg','test title 1', 'long description','category'),
        ('events-7.jpg','test title 1', 'long description','category'),
        ('events-8.jpg','test title 1', 'long description','category'),
        ('events-9.jpg','test title 1', 'long description','category'),
        ('events-10.jpg','test title 1', 'long description','category'),
        ('events-11.jpg','test title 1', 'long description','category')
    ]
    naturephotos=[
        ('nature-1.jpg','test title 1', 'long description','category'),
        ('nature-2.jpg','test title 1', 'long description','category'),
        ('nature-3.jpg','test title 1', 'long description','category'),
        ('nature-4.jpg','test title 1', 'long description','category'),
        ('nature-5.jpg','test title 1', 'long description','category'),
        ('nature-6.jpg','test title 1', 'long description','category'),
        ('nature-7.jpg','test title 1', 'long description','category')
    ]
    travelphotos=[
        ('nature-1.jpg','test title 1', 'long description','category'),
        ('nature-2.jpg','test title 1', 'long description','category'),
        ('nature-3.jpg','test title 1', 'long description','category'),
        ('nature-4.jpg','test title 1', 'long description','category'),
        ('nature-5.jpg','test title 1', 'long description','category')
    ]
    if(photocategory=='food'):
        photos=foodphotos
    elif(photocategory=='people'):
        photos=peoplephotos
    elif(photocategory=='nature'):
        photos=naturephotos
    elif(photocategory=='events'):
        photos=eventphotos
    elif(photocategory=='travel'):
        photos=travelphotos
    else:
        photos=foodphotos+peoplephotos+naturephotos+eventphotos
    return render_template('photos.html',photocategory=photocategory,sidebar=photosidebar,photos=photos)


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.run(port=app.config.get('SERVER_PORT'))




__author__ = 'nickysemenza'

import os,os.path
from PIL import Image #pillow

def smallerImage(imagePath):
    img = Image.open(imagePath)
    basewidth = 700
    wpercent = (basewidth/float(img.size[0]))
    hsize = int((float(img.size[1])*float(wpercent)))
    img = img.resize((basewidth,hsize), Image.ANTIALIAS)
    fileName, fileExtension = os.path.splitext(imagePath)
    print(fileName+'_thumb'+fileExtension)
    img.save(fileName+'_thumb'+fileExtension)



path, file = os.path.split(os.path.realpath(__file__))
path=path+'/static/images'
print(path)
for root, _, files in os.walk(path):
    for f in files:
        fullpath = os.path.join(root, f)
        if(fullpath.endswith('.jpg')):
            print(fullpath)
            smallerImage(fullpath)





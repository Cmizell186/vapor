from flask_wtf import FlaskForm
from wtforms import SubmitField
from flask_wtf.file import FileField, FileRequired
from app.models import Image

class CreateImage(FlaskForm):
    image = FileField('image', validators=[FileRequired()])
    

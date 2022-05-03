from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, IntegerField, DateField, BooleanField
from flask_wtf.file import FileField, FileRequired
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Game

class EditGame(FlaskForm):
  title = StringField('title', validators=[DataRequired()])
  price = FloatField('price', validators=[DataRequired()])
  description = StringField('description', validators=[DataRequired()])
  release_date = DateField('release date', validators=[DataRequired()])
  is_mature = BooleanField('mature')
  video = StringField('video')
  image = FileField('image', validators=[FileRequired()])
  developer = StringField('developer', validators=[DataRequired()])
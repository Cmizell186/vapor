from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DateField, BooleanField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Game

class CreateGame(FlaskForm):
  title = StringField('title', validators=[DataRequired()])
  price = IntegerField('price', validators=[DataRequired()])
  description = StringField('description', validators=[DataRequired()])
  release_date = DateField('release date', validators=[DataRequired()])
  is_mature = BooleanField('mature', validators=[DataRequired()])
  video = StringField('video')
  img = StringField('img', validators=[DataRequired()])
  developer = StringField('developer', validators=[DataRequired()])

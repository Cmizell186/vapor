from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, IntegerField, DateField, BooleanField, SelectField
from flask_wtf.file import FileField, FileRequired
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Game

class EditGame(FlaskForm):
  title = StringField('title', validators=[DataRequired()])
  price = FloatField('price', validators=[DataRequired()])
  description = StringField('description', validators=[DataRequired()])
  release_date = DateField('release date', validators=[DataRequired()])
  maturity_rating = SelectField('maturity rating', validate_choice=False,
  choices=[('e', 'Everyone'),
            ('e10p', 'Everyone 10+'),
            ('t', 'Teen'),
            ('m', 'Mature 17+'),
            ('ao', 'Adults Only 18+'),
            ('rp', 'Rating Pending')
          ])
  video = StringField('video')
  developer = StringField('developer', validators=[DataRequired()])

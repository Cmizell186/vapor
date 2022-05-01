from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField
from wtforms.validators import DataRequired
from app.models import Review

class ReviewGame(FlaskForm):
  is_recommended = BooleanField('is_recommended', validators=[DataRequired()])
  content = StringField('content', validators=[DataRequired()])

from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, IntegerField
from wtforms.validators import DataRequired
from app.models import Review

class ReviewGame(FlaskForm):
  is_recommended = BooleanField('is_recommended')
  content = StringField('content', validators=[DataRequired()])
  game_id = IntegerField('game_id')
  user_id = IntegerField('user_id')

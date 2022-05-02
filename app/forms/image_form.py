from flask_wtf import FlaskForm
from sqlalchemy import Integer
from wtforms import SubmitField, IntegerField
from flask_wtf.file import FileField, FileRequired
from app.models import Image

class CreateImage(FlaskForm):
    image = FileField('image', validators=[FileRequired()])
    game_id = IntegerField('game_id')
    user_id = IntegerField('user_id')

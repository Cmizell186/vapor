from models.db import db


class Library(db.Model):
    __tablename__ = 'libraries'

    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), primary_key=True)
    game_id = db.Column(db.Integer, db.ForeignKey("games.id"), primary_key=True)
    is_owned = db.Column(db.Boolean)

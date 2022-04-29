from .db import db


class Tag(db.Model):
    __tablename__ = 'tags'

    id = db.Column(db.Integer, primary_key=True)
    genre_id = db.Column(db.Integer, db.ForeignKey("genres.id"))
    game_id = db.Column(db.Integer, db.ForeignKey("games.id"))
    genres = db.relationship("Genre", back_populates="genre_tag")
    games = db.relationship("Game", back_populates="tags")

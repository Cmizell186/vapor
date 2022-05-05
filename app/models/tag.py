from .db import db


class Tag(db.Model):
    __tablename__ = 'tags'

    id = db.Column(db.Integer, primary_key=True)
    genre_id = db.Column(db.Integer, db.ForeignKey("genres.id"))
    game_id = db.Column(db.Integer, db.ForeignKey("games.id"))

    genres = db.relationship("Genre", back_populates="genre_tag")
    games = db.relationship("Game", back_populates="tags")

    def to_dict(self):
        return {
            'id': self.id,
            'genre_id': self.genre_id,
            'game_id': self.game_id,
            'genres': self.genres.to_dict(),
        }

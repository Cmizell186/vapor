from .db import db


class Library(db.Model):
    __tablename__ = 'libraries'

    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), primary_key=True)
    game_id = db.Column(db.Integer, db.ForeignKey("games.id"), primary_key=True)
    is_owned = db.Column(db.Boolean)

    game = db.relationship('Game', back_populates="library")

    def to_dict(self):
        return {
            'user_id': self.user_id,
            'game_id': self.game_id,
            'is_owned': self.is_owned,
            'game': self.game.to_dict()
        }

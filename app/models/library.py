from .db import db


class Library(db.Model):
    __tablename__ = 'libraries'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    game_id = db.Column(db.Integer, db.ForeignKey("games.id", ondelete='CASCADE'))
    is_owned = db.Column(db.Boolean)

    # game = db.relationship('Game', backref="library", passive_deletes=True)
    game = db.relationship('Game', back_populates="library")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'game_id': self.game_id,
            'is_owned': self.is_owned,
            'game': self.game.to_dict()
        }

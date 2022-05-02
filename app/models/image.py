from .db import db


class Image(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    game_id = db.Column(db.Integer, db.ForeignKey("games.id"))

    games = db.relationship("Game", back_populates="image")
    user = db.relationship("User", back_populates="image")

    def to_dict(self):
        return {
            'id': self.id,
            'image': self.image,
            'user_id': self.user_id,
            'game_id': self.game_id,
        }

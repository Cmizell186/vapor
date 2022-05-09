from turtle import back
from .db import db



class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    is_recommended = db.Column(db.Boolean)
    content = db.Column(db.String(2500), nullable=False)
    game_id = db.Column(db.Integer, db.ForeignKey("games.id", ondelete="CASCADE"))
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))

    # games = db.relationship("Game", back_populates="reviews")
    users = db.relationship("User", back_populates="reviews_user")

    def to_dict(self):
        return {
            'id': self.id,
            'is_recommended': self.is_recommended,
            'content': self.content,
            'game_id': self.game_id,
            'user_id': self.user_id,
            'users': self.users.to_dict()
        }

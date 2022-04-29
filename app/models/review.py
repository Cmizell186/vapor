from .db import db



class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    is_recommended = db.Column(db.Boolean)
    content = db.Column(db.String(2500), nullable=False)
    game_id = db.Column(db.Integer, db.ForeignKey("games.id"))
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))

    games = db.relationship("Game", back_populates="reviews")
    users = db.relationship("User", back_populates="reviews_user")

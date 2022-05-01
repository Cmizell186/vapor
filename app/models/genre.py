from .db import db


class Genre(db.Model):
    __tablename__ = "genres"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50))
    
    genre_tag = db.relationship("Tag", back_populates="genres")

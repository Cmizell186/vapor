from turtle import back
from .db import db



class Game(db.Model):
    __tablename__ = 'games'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(150), nullable=False, unique=True)
    price = db.Column(db.Float(precision=4, asdecimal=False), nullable=False)
    description = db.Column(db.String(2500), nullable=False)
    release_date = db.Column(db.Date, nullable=False)
    video = db.Column(db.String(255), nullable=False)
    developer = db.Column(db.String(255), nullable=False)
    maturity_rating = db.Column(db.String(50))
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))

    user = db.relationship("User", back_populates="games")
    reviews = db.relationship("Review", backref="games", cascade='all,delete')
    tags = db.relationship("Tag", back_populates="games")
    image = db.relationship("Image", back_populates="games")
    library = db.relationship("Library", backref="games", cascade='all,delete')

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'price': self.price,
            'description': self.description,
            'release_date': self.release_date,
            'video' : self.video,
            'developer': self.developer,
            'maturity_rating': self.maturity_rating,
            'user_id': self.user_id,
            'images': [img.to_dict() for img in self.image],
            'tags': [tag.to_dict() for tag in self.tags],
            'user_id': self.user_id
        }

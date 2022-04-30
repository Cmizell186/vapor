from .db import db



class Game(db.Model):
    __tablename__ = 'games'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(150), nullable=False, unique=True)
    price = db.Column(db.Float(4,2), nullable=False)
    description = db.Column(db.String(2500), nullable=False)
    release_date = db.Column(db.Date, nullable=False)
    is_mature = db.Column(db.Boolean, nullable=False)
    video = db.Column(db.String(255))
    img = db.Column(db.String(255), nullable=False)
    developer = db.Column(db.String(255), nullable=False)

    reviews = db.relationship("Review", back_populates="games")
    tags = db.relationship("Tag", back_populates="games")

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'price': self.price,
            'description': self.description,
            'release_date': self.release_date,
            'is_mature': self.is_mature,
            'video' : self.video,
            'img': self.img,
            'developer': self.developer
        }

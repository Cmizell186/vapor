from .db import db

class UserImage(db.Model):
    __tablename__ = 'user_images'

    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))

    image_user = db.relationship("User", back_populates="user_image")

    def to_dict(self):
        return {
            'id': self.id,
            'image': self.image,
            'user_id': self.user_id
        }

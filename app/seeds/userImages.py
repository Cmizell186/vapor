from app.models import db
from app.models.userImage import UserImage

def seed_userImages():

    demo = UserImage(
        id=1,
        image='https://vaporgames.s3.us-west-1.amazonaws.com/default_user.jpg',
        user_id=1
    )
    damian_user = UserImage(
        id=2,
        image='https://vaporgames.s3.us-west-1.amazonaws.com/damianpfp.jpg',
        user_id=2
    )
    jason_user = UserImage(
        id=3,
        image="https://vaporgames.s3.us-west-1.amazonaws.com/jasonpfp.jpg",
        user_id=3
    )
    chris_user = UserImage(
        id=4,
        image="https://vaporgames.s3.us-west-1.amazonaws.com/IMG_2600.jpg",
        user_id=4
    )
    jared_user = UserImage(
        id=5,
        image="https://vaporgames.s3.us-west-1.amazonaws.com/jaredprofilepic.png",
        user_id=5
    )

    db.session.add_all([demo, damian_user, jason_user, chris_user, jared_user])
    db.session.commit()

def undo_userImages():
    db.session.execute('TRUNCATE user_images RESTART IDENTITY CASCADE;')
    db.session.commit()

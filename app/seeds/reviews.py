from app.models import db
from app.models.review import Review

def seed_reviews():
    review1 = Review(
        is_recommended = True,
        content = "Omg this game was a super duper banger wanger!! I love how Hard it was! Makes me laugh so much omg xD!!",
        game_id = 2,
        user_id = 2,
    )
    review2 = Review(
        is_recommended = False,
        content = "TOGETHAAAA, WE WILL DEVOAHHH THE VERYY GOOOUHDS",
        game_id = 1,
        user_id = 1,
    )
    review3 = Review(
        is_recommended = False,
        content = "Fell asleep while playing this game... Thanks for taking my money",
        game_id = 3,
        user_id = 3,
    )
    review4 = Review(
        is_recommended = False,
        content = "Spent 3 hours holding W just for the game to crash, wow",
        game_id = 3,
        user_id = 2,
    )
    review5 = Review(
        is_recommended = False,
        content = "Not even a turtle would walk this slow, Great physics engine LOL!",
        game_id = 3,
        user_id = 1,
    )


    db.session.add_all([review1, review2, review3,review4,review5])
    db.session.commit()

def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()

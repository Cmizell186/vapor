from app.models import db
from app.models.review import Review

def seed_reviews():
    review1 = Review(
        is_recommended = True,
        content = "“I'm very prone to loneliness,” said Kojima. “I think there are similar people around the world — especially gamers. … When they're alone playing video games in their living room, they don't feel like they fit into society or their community. So when people play this game they realize people like them exist all over the world. Knowing that even though I'm lonely, there are other people like me — and that makes you feel at ease. That's what I want people to feel when they play this game.”",
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
        is_recommended = True,
        content = "This game is outstanding! You can do just about every thing. No lake of fun and finding other places to roam. I think it is the best game I ever plaid. I had a stroke recently, I can still play the game. I really enjoy the game very much. Give it a try, it's not like other racing games, so give it a try. Thank you",
        game_id = 3,
        user_id = 3,
    )
    review4 = Review(
        is_recommended = False,
        content = "This game is honestly fun but lately i have not been able to get on the game cause it crashes at loading screen and i spent 60$ or something on a crashs",
        game_id = 3,
        user_id = 2,
    )
    review5 = Review(
        is_recommended = False,
        content = "I like killing the crabs. I do not like the skeleton men because they are annoying. In no part are the skeleton men a bad thing in the game but I just find them a little bit spooky for my taste.",
        game_id = 4,
        user_id = 1,
    )


    db.session.add_all([review1, review2, review3,review4,review5])
    db.session.commit()

def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()

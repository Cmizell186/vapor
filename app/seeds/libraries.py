from app.models import db
from app.models.library import Library

def seed_libraries():
    user1_cart = Library(
        user_id = 1,
        game_id = 1,
        is_owned = False,
    )
    user1_lib = Library(
        user_id = 1,
        game_id = 2,
        is_owned = True,
    )
    user1_lib2 = Library(
        user_id = 1,
        game_id = 3,
        is_owner = True
    )
    user1_lib3 = Library(
        user_id = 1,
        game_id = 4,
        is_owner = True
    )
    user1_lib4 = Library(
        user_id = 1,
        game_id = 5,
        is_owner = True
    )

    user2_cart = Library(
        user_id = 2,
        game_id = 1,
        is_owner = False
    )

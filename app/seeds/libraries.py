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
    user2_lib = Library(
        user_id = 2,
        game_id = 2,
        is_owner = True
    )
    user2_lib2 = Library(
        user_id = 2,
        game_id = 3,
        is_owner = True
    )
    user2_lib3 = Library(
        user_id = 2,
        game_id = 4,
        is_owner = True
    )
    user2_lib4 = Library(
        user_id = 2,
        game_id = 5,
        is_owner = True
    )

    user3_cart = Library(
        user_id = 3,
        game_id = 1,
        is_owner = False
    )
    user3_cart2 = Library(
        user_id = 3,
        game_id = 2,
        is_owner = False
    )
    user3_lib = Library(
        user_id = 3,
        game_id = 3,
        is_owner = True
    )
    user3_lib2 = Library(
        user_id = 3,
        game_id = 4,
        is_owner = True
    )
    user3_lib3 = Library(
        user_id = 3,
        game_id = 5,
        is_owner = True
    )

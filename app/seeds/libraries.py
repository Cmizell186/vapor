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
        is_owned = True
    )
    user1_lib3 = Library(
        user_id = 1,
        game_id = 4,
        is_owned = True
    )
    user1_lib4 = Library(
        user_id = 1,
        game_id = 5,
        is_owned = True
    )
    user1_lib5 = Library(
        user_id = 1,
        game_id = 8,
        is_owned = True
    )

    user2_cart = Library(
        user_id = 2,
        game_id = 1,
        is_owned = True
    )
    user2_lib = Library(
        user_id = 2,
        game_id = 2,
        is_owned = True
    )
    user2_lib2 = Library(
        user_id = 2,
        game_id = 10,
        is_owned = True
    )
    user2_lib3 = Library(
        user_id = 2,
        game_id = 9,
        is_owned = True
    )
    user2_lib4 = Library(
        user_id = 2,
        game_id = 6,
        is_owned = True
    )
    user3_cart = Library(
        user_id = 3,
        game_id = 1,
        is_owned = False
    )
    user3_lib = Library(
        user_id = 3,
        game_id = 2,
        is_owned = True
    )
    user3_lib2 = Library(
        user_id = 3,
        game_id = 7,
        is_owned = True
    )
    user3_lib3 = Library(
        user_id = 3,
        game_id = 5,
        is_owned = True
    )
    user4_lib = Library(
        user_id = 4,
        game_id = 3,
        is_owned = True
    )
    user4_lib2 = Library(
        user_id = 4,
        game_id = 5,
        is_owned = True
    )
    user5_lib = Library(
        user_id = 5,
        game_id = 4,
        is_owned = True
    )

    db.session.add_all([
    user1_cart, user1_lib, user1_lib2, user1_lib3, user1_lib4,
    user2_cart, user2_lib, user2_lib2, user2_lib3, user2_lib4,
    user3_cart, user3_lib, user3_lib2, user3_lib3, user1_lib5,
    user4_lib, user4_lib2, user5_lib
    ])

    db.session.commit()

def undo_libraries():
    db.session.execute('TRUNCATE libraries RESTART IDENTITY CASCADE;')
    db.session.commit()

from app.models import db, User
from app.models.game import Game

def seed_games():
    eldenring = Game(
        title='Elden Ring', price=34.99, description="THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
        release_date="2020_09_15", is_mature=True, img="https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_e80a907c2c43337e53316c71555c3c3035a1343e.600x338.jpg?t=1649774637", developer="From Software")

    db.session.add(eldenring)


    db.session.commit()


def undo_games():
    db.session.execute('TRUNCATE games RESTART IDENTITY CASCADE;')
    db.session.commit()

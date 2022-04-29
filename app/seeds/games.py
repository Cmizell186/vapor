from turtle import title
from app.models import db, User
from app.models.game import Game

def seed_games():
    eldenring = Game(
        title='Elden Ring', price=34.99, description="THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
        release_date="2020_09_15", is_mature=True, img="https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_e80a907c2c43337e53316c71555c3c3035a1343e.600x338.jpg?t=1649774637", developer="From Software")

    death_stranding = Game(
        title='Death Stranding', price=9.99, description="From legendary game creator Hideo Kojima comes a genre-defying experience, now expanded in this definitive DIRECTOR’S CUT. As Sam Bridges, your mission is to deliver hope to humanity by connecting the last survivors of a decimated America. Can you reunite the shattered world, one step at a time?", release_date="2022_03_22", is_mature=True, img="https://cdn.akamai.steamstatic.com/steam/apps/1850570/header.jpg?t=1649438096", developer="KOJIMA PRODUCTIONS"
    )

    forza_horizon_4 = Game(
        title="Forza Horizon 4", price=59.99, description="Dynamic seasons change everything at the world’s greatest automotive festival. Go it alone or team up with others to explore beautiful and historic Britain in a shared open world.", release_date="2021_03_09", is_mature=False, img="https://cdn.akamai.steamstatic.com/steam/apps/1293830/header.jpg?t=1622068013", developer="Playground Games"
    )

    db.session.add(forza_horizon_4)
    db.session.add(eldenring)
    db.session.add(death_stranding)


    db.session.commit()


def undo_games():
    db.session.execute('TRUNCATE games RESTART IDENTITY CASCADE;')
    db.session.commit()

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

    elder_scrolls_v = Game(
        title="The Elder Scrolls V: Skyrim VR", price=59.99, description="A true, full-length open-world game for VR has arrived from Bethesda Game Studios. Skyrim VR reimagines the complete epic fantasy masterpiece with an unparalleled sense of scale, depth, and immersion. Skyrim VR also includes all official add-ons.", release_date="2018_04_02", is_mature=True, img="https://cdn.akamai.steamstatic.com/steam/apps/611670/header.jpg?t=1564002443", developer="Bethesda Game Studios"
    )

    dynasty_warriors_8 = Game(
        title="DYNASTY WARRIORS 8: Xtreme Legends Complete Edition", price=19.99, description="Dynasty Warriors 8: Xtreme Legends introduces entirely new levels of fun to the refreshing gameplay vanquishing swarms of enemies with mighty warriors found in Dynasty Warriors 8.", release_date="2014_05_13", is_mature=False, img="https://cdn.akamai.steamstatic.com/steam/apps/278080/header.jpg?t=1646806363", developer="KOEI TECMO GAMES CO., LTD."
    )

    attack_on_titan_2 = Game(
        title="Attack on Titan 2", price=19.99, description="A 4X real-time strategy game from the developers of the critically acclaimed Northgard. Set in Frank Herbert’s groundbreaking Dune universe, you must lead your faction and battle for control and dominance over the harsh desert planet of Arrakis.", release_date="2022_04_26", is_mature=False, img="https://cdn.akamai.steamstatic.com/steam/apps/1605220/header.jpg?t=1651074102", developer="Shiro Games"
    )

    dune_sice_wars = Game(
        title="Dune: Spice Wars", price=29.99, description="Abandon all fear. Attack on Titan 2 is the gripping sequel to the action game based on the worldwide hit anime series Attack on Titan.", release_date="2018_05_14", is_mature=True, img="https://cdn.akamai.steamstatic.com/steam/apps/601050/header.jpg?t=1650611424", developer="KOEI TECMO GAMES CO., LTD."
    )

    stars_wars_battlefront_II = Game(
        title="STAR WARS™ Battlefront™ II", price=7.99, description="Be the hero in the ultimate STAR WARS™ battle fantasy with STAR WARS™ Battlefront™ II: Celebration Edition!", release_date="2018_11_16", is_mature=False, img="https://cdn.akamai.steamstatic.com/steam/apps/1237950/header.jpg?t=1615894850", developer="DICE"
    )

    fifa_22 = Game(
        title="FIFA 22", price=59.99, description="Powered by Football™, EA SPORTS™ FIFA 22 brings the game even closer to the real thing with fundamental gameplay advances and a new season of innovation across every mode.", release_date="2021_09_30", is_mature=False, img="https://cdn.akamai.steamstatic.com/steam/apps/1506830/header.jpg?t=1644868577", developer="EA Canada & EA Romania"
    )

    madden_22 = Game(
        title="Madden NFL 22", price=59.99, description="Madden NFL 22 is where gameday happens. All-new features in Franchise include staff management, an enhanced scenario engine, and weekly strategy. Share avatar progress and player class between Face of The Franchise and The Yard with unified progression.", release_date="2021_08_19", is_mature=False, img="https://cdn.akamai.steamstatic.com/steam/apps/1519350/header.jpg?t=1646323223", developer="Tiburon"
    )

    db.session.add(forza_horizon_4)
    db.session.add(eldenring)
    db.session.add(death_stranding)
    db.session.add(elder_scrolls_v)
    db.session.add(dynasty_warriors_8)
    db.session.add(attack_on_titan_2)
    db.session.add(dune_sice_wars)
    db.session.add(stars_wars_battlefront_II)
    db.session.add(fifa_22)
    db.session.add(madden_22)

    db.session.commit()

def undo_games():
    db.session.execute('TRUNCATE games RESTART IDENTITY CASCADE;')
    db.session.commit()

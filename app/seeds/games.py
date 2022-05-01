from app.models import db, User, user
from app.models.game import Game

def seed_games():
    #1
    eldenring = Game(
        title='Elden Ring',
        price=34.99,
        description="THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
        release_date="2020_09_15",
        is_mature=True,
        image="https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_e80a907c2c43337e53316c71555c3c3035a1343e.600x338.jpg?t=1649774637",
        video="https://cdn.akamai.steamstatic.com/steam/apps/256875477/movie480_vp9.webm?t=1645743469",
        developer="From Software",
        user_id=2
        )
    #2
    death_stranding = Game(
        title='Death Stranding',
        price=9.99,
        description="From legendary game creator Hideo Kojima comes a genre-defying experience, now expanded in this definitive DIRECTOR'S CUT. As Sam Bridges, your mission is to deliver hope to humanity by connecting the last survivors of a decimated America. Can you reunite the shattered world, one step at a time?",
        release_date="2022_03_22",
        is_mature=True,
        image="https://cdn.akamai.steamstatic.com/steam/apps/1850570/header.jpg?t=1649438096",
        video="https://cdn.akamai.steamstatic.com/steam/apps/256878921/movie480_vp9.webm?t=1648163046",
        developer="KOJIMA PRODUCTIONS",
        user_id=3
    )
    #3
    forza_horizon_5 = Game(
        title="Forza Horizon 5",
        price=59.99,
        description="Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world's greatest cars. ",
        release_date="2021_11_08",
        is_mature=False,
        image="https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg?t=1651154476",
        video="https://cdn.akamai.steamstatic.com/steam/apps/256875134/movie480_vp9.webm?t=1647525311",
        developer="Playground Games",
        user_id=4
    )
    #4
    elder_scrolls_v = Game(
        title="The Elder Scrolls V: Skyrim VR",
        price=59.99,
        description="A true, full-length open-world game for VR has arrived from Bethesda Game Studios. Skyrim VR reimagines the complete epic fantasy masterpiece with an unparalleled sense of scale, depth, and immersion. Skyrim VR also includes all official add-ons.",
        release_date="2018_04_02",
        is_mature=True,
        image="https://cdn.akamai.steamstatic.com/steam/apps/611670/header.jpg?t=1564002443",
        video="https://cdn.akamai.steamstatic.com/steam/apps/256672927/movie480.webm?t=1476991615",
        developer="Bethesda Game Studios",
        user_id=5
    )
    #5
    dynasty_warriors_8 = Game(
        title="DYNASTY WARRIORS 8: Xtreme Legends Complete Edition",
        price=19.99,
        description="Dynasty Warriors 8: Xtreme Legends introduces entirely new levels of fun to the refreshing gameplay vanquishing swarms of enemies with mighty warriors found in Dynasty Warriors 8.",
        release_date="2014_05_13",
        is_mature=False,
        image="https://cdn.akamai.steamstatic.com/steam/apps/278080/header.jpg?t=1646806363",
        video="https://cdn.akamai.steamstatic.com/steam/apps/2032718/movie480.webm?t=1447362212",
        developer="KOEI TECMO GAMES CO., LTD.",
        user_id=4
    )
    #6
    attack_on_titan_2 = Game(
        title="Attack on Titan 2",
        price=19.99,
        description="Abandon all fear. Attack on Titan 2 is the gripping sequel to the action game based on the worldwide hit anime series Attack on Titan.",
        release_date="2018_05_14",
        is_mature=True,
        image="https://cdn.akamai.steamstatic.com/steam/apps/1605220/header.jpg?t=1651074102",
        video="https://cdn.akamai.steamstatic.com/steam/apps/256707253/movie480.webm?t=1521075566",
        developer="KOEI TECMO GAMES CO., LTD.",
        user_id=2
    )
    #7
    dune_spice_wars = Game(
        title="Dune: Spice Wars",
        price=29.99,
        description="A 4X real-time strategy game from the developers of the critically acclaimed Northgard. Set in Frank Herbert's groundbreaking Dune universe, you must lead your faction and battle for control and dominance over the harsh desert planet of Arrakis.",
        release_date="2022_04_26",
        is_mature=False,
        image="https://cdn.akamai.steamstatic.com/steam/apps/1605220/header.jpg?t=1651074102",
        video="https://cdn.akamai.steamstatic.com/steam/apps/256883904/movie480_vp9.webm?t=1650978286",
        developer="Shiro Games",
        user_id=3
    )
    #8
    stars_wars_battlefront_II = Game(
        title="STAR WARS™ Battlefront™ II",
        price=7.99,
        description="Be the hero in the ultimate STAR WARS™ battle fantasy with STAR WARS™ Battlefront™ II: Celebration Edition!",
        release_date="2018_11_16",
        is_mature=False,
        image="https://cdn.akamai.steamstatic.com/steam/apps/1237950/header.jpg?t=1615894850",
        video="https://cdn.akamai.steamstatic.com/steam/apps/256789731/movie480_vp9.webm?t=1592407744",
        developer="DICE",
        user_id=1
    )
    #9
    fifa_22 = Game(
        title="FIFA 22",
        price=59.99,
        description="Powered by Football™, EA SPORTS™ FIFA 22 brings the game even closer to the real thing with fundamental gameplay advances and a new season of innovation across every mode.",
        release_date="2021_09_30",
        is_mature=False,
        image="https://cdn.akamai.steamstatic.com/steam/apps/1506830/header.jpg?t=1644868577",
        video="https://cdn.akamai.steamstatic.com/steam/apps/256852627/movie480_vp9.webm?t=1633113400",
        developer="EA Canada & EA Romania",
        user_id=2
    )
    #10
    madden_22 = Game(
        title="Madden NFL 22",
        price=59.99,
        description="Madden NFL 22 is where gameday happens. All-new features in Franchise include staff management, an enhanced scenario engine, and weekly strategy. Share avatar progress and player class between Face of The Franchise and The Yard with unified progression.",
        release_date="2021_08_19",
        is_mature=False,
        image="https://cdn.akamai.steamstatic.com/steam/apps/1519350/header.jpg?t=1646323223",
        video="https://cdn.akamai.steamstatic.com/steam/apps/256844606/movie480_vp9.webm?t=1627490022",
        developer="Tiburon",
        user_id=2
    )

    db.session.add(eldenring)
    db.session.add(forza_horizon_5)
    db.session.add(death_stranding)
    db.session.add(elder_scrolls_v)
    db.session.add(dynasty_warriors_8)
    db.session.add(attack_on_titan_2)
    db.session.add(dune_spice_wars)
    db.session.add(stars_wars_battlefront_II)
    db.session.add(fifa_22)
    db.session.add(madden_22)

    db.session.commit()

def undo_games():
    db.session.execute('TRUNCATE games RESTART IDENTITY CASCADE;')
    db.session.commit()

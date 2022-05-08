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
        video="https://cdn.akamai.steamstatic.com/steam/apps/256844606/movie480_vp9.webm?t=1627490022",
        developer="Tiburon",
        user_id=2
    )

    # 11
    witcher3 = Game(
        title="The Witcher 3: Wild Hunt",
        price=39.99,
        description="As war rages on throughout the Northern Realms, you take on the greatest contract of your life — tracking down the Child of Prophecy, a living weapon that can alter the shape of the world.",
        release_date='2015_05_18',
        is_mature=True,
        video="https://cdn.akamai.steamstatic.com/steam/apps/256658589/movie480.webm?t=1528288687",
        developer="CD PROJEKT RED",
        user_id = 4
    )

    # 12
    border_lands2 = Game(
        title = "Borderlands 2",
        price = 19.99,
        description = "The Ultimate Vault Hunter’s Upgrade lets you get the most out of the Borderlands 2 experience.",
        release_date = '2012_09_17',
        is_mature = True,
        video = "https://cdn.akamai.steamstatic.com/steam/apps/2029699/movie480.webm?t=1447359143",
        developer = "Gearbox Software",
        user_id = 4
    )

    # 13
    valorant = Game(
        title = "Valorant",
        price = 0.00,
        description = "VALORANT is a character-based 5v5 tactical shooter set on the global stage. Outwit, outplay, and outshine your competition with tactical abilities, precise gunplay, and adaptive teamwork.",
        release_date = '2020_06_02',
        is_mature = False,
        video = "",
        developer = "Riot Games",
        user_id = 4
    )

    # 14
    lol = Game(
        title = "League of Legends",
        price = 0.00,
        description = "Become a legend. Find your champion, master their abilities, and outplay your opponents in an epic 5v5 battle to destroy the enemy base.",
        release_date = '2009_10_27',
        is_mature = False,
        video = "",
        developer = "Riot Games",
        user_id = 4
    )

    # 15
    ac2 = Game(
        title = "",
        price = 19.99,
        description = "An epic story of family, vengeance and conspiracy set in the pristine, yet brutal, backdrop of a Renaissance Italy. New low price!",
        release_date = "2010_03_09",
        is_mature = True,
        video = "",
        developer = "Ubisoft",
        user_id = 4
    )

    # 16
    rocket = Game(
        title = "Rocket League",
        price = 0.00,
        description = "Download and compete in the high-octane hybrid of arcade-style soccer and vehicular mayhem! customize your car, hit the field, and compete in one of the most critically acclaimed sports games of all time! Download and take your shot!",
        release_date = '2015_07_07',
        is_mature = False,
        video = "",
        developer = "Psyonix LLC",
        user_id = 4
    )

    # 17
    warframe = Game(
        title = "Warframe",
        price = 0.00,
        description = "Awaken as an unstoppable warrior and battle alongside your friends in this story-driven free-to-play online action game",
        release_date = "2013_03_25",
        is_mature = True,
        video = "https://cdn.akamai.steamstatic.com/steam/apps/256862739/movie480_vp9.webm?t=1638285456",
        developer = "Digital Extremes",
        user_id = 4
    )

    # 18
    minecraft = Game(
        title = "Minecraft",
        price = 26.95,
        description = "Explore your own unique world, survive the night, and create anything you can imagine!",
        release_date = "2011_11_18",
        is_mature = False,
        video = "",
        developer = "Mojang",
        user_id = 4
    )

    # 19
    ocarina = Game(
        title = "The Legend of Zelda: Ocarina of Time",
        price = 59.99,
        description = "The Legend of Zelda: Ocarina of Time is an action-adventure game developed and published by Nintendo for the Nintendo 64.",
        release_date = "1998_11_21",
        is_mature = False,
        video = "https://www.youtube.com/embed/CtMllWsML5M",
        developer = "Nintendo",
        user_id = 4
    )

    # 20
    bananashooter = Game(
        title = "Banana Shooter",
        price = 0.00,
        description = "In this game, you are not a banana, you are Dave, because you like to eat bananas, so the banana is taken away, the only way to get it is to kill other Dave. When you have the highest kill count, you will will get bananas.",
        release_date = "2022_05_01",
        is_mature = False,
        video = "https://cdn.akamai.steamstatic.com/steam/apps/256880748/movie480_vp9.webm?t=1650998831",
        developer = "CodingDaniel",
        user_id = 4
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
    db.session.add(witcher3)
    db.session.add(border_lands2)
    db.session.add(valorant)
    db.session.add(lol)
    db.session.add(ac2)
    db.session.add(rocket)
    db.session.add(warframe)
    db.session.add(minecraft)
    db.session.add(ocarina)
    db.session.add(bananashooter)

    db.session.commit()

def undo_games():
    db.session.execute('TRUNCATE games RESTART IDENTITY CASCADE;')
    db.session.commit()

from app.models import db
from app.models.image import Image

def seed_images():

  # Elden Ring
  game1_image1 = Image(
    image = "https://vaporgames.s3.us-west-1.amazonaws.com/eldenring1.png",
    user_id = 2,
    game_id = 1
  )
  game1_image2 = Image(
    image = "https://vaporgames.s3.us-west-1.amazonaws.com/eldenring2.jpg",
    user_id = 2,
    game_id = 1
  )
  game1_image3 = Image(
    image = "https://vaporgames.s3.us-west-1.amazonaws.com/eldenring3.jpg",
    user_id = 2,
    game_id = 1
  )
  game1_image4 = Image(
    image = "https://vaporgames.s3.us-west-1.amazonaws.com/eldenring4.jpg",
    user_id = 2,
    game_id = 1
  )
  game1_image5 = Image(
    image = "https://vaporgames.s3.us-west-1.amazonaws.com/eldenring5.jpg",
    user_id = 2,
    game_id = 1
  )
  game1_image6 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/eldenring6.png",
      user_id = 2,
      game_id = 1
  )
  game1_image7 = Image(
      image="https://vaporgames.s3.us-west-1.amazonaws.com/elden_ring_7.png",
      user_id = 2,
      game_id = 1
  )


  # death stranding
  game2_image1 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/forzahorizon1.jpg",
      user_id = 3,
      game_id = 2
  )
  game2_image2 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/forzahorizon2.jpg",
      user_id = 3,
      game_id = 2
  )
  game2_image3 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/forzahorizon3.jpg",
      user_id = 3,
      game_id = 2
  )
  game2_image4 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/forzahorizon4.jpg",
      user_id = 3,
      game_id = 2
  )
  game2_image5 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/forzahorizon5.jpg",
      user_id = 3,
      game_id = 2
  )
  game2_image6 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/forzahorizon6.jpg",
      user_id = 3,
      game_id = 2
  )
  game2_image7 = Image(
      image="https://vaporgames.s3.us-west-1.amazonaws.com/death_stranding_7.png",
      user_id = 3,
      game_id = 2
  )

  # forza horizon
  game3_image1 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/deathstranding1.jpg",
      user_id = 4,
      game_id = 3
  )
  game3_image2 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/deathstranding2.jpg",
      user_id = 4,
      game_id = 3
  )
  game3_image3 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/deathstranding3.jpg",
      user_id = 4,
      game_id = 3
  )
  game3_image4 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/deathstranding4.jpg",
      user_id = 4,
      game_id = 3
  )
  game3_image5 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/deathstranding5.jpg",
      user_id = 4,
      game_id = 3
  )
  game3_image6 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/deathstranding6.jpg",
      user_id = 4,
      game_id = 3
  )
  game3_image7 = Image(
      image="https://vaporgames.s3.us-west-1.amazonaws.com/forza_horizon5_7.jpg",
      user_id = 4,
      game_id = 3
  )


  # Skyrim VR
  game4_image1 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/skyrimvr1.jpg",
      user_id = 5,
      game_id = 4
  )
  game4_image2 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/skyrimvr2.jpg",
      user_id = 5,
      game_id = 4
  )
  game4_image3 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/skyrimvr3.jpg",
      user_id = 5,
      game_id = 4
  )
  game4_image4 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/skyrimvr4.jpg",
      user_id = 5,
      game_id = 4
  )
  game4_image5 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/skyrimvr5.jpg",
      user_id = 5,
      game_id = 4
  )
  game4_image6 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/skyrimvr6.jpg",
      user_id = 5,
      game_id = 4
  )
  game4_image7 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/elder_scrollsv_7.png",
      user_id = 5,
      game_id = 4
  )


  # dynasty warriors
  game5_image1 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/dynastywarriors1.jpg",
      user_id = 4,
      game_id = 5
  )
  game5_image2 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/dynastywarriors2.jpg",
      user_id = 4,
      game_id = 5
  )
  game5_image3 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/dynastywarriors3.jpg",
      user_id = 4,
      game_id = 5
  )
  game5_image4 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/dynastywarriors4.jpg",
      user_id = 4,
      game_id = 5
  )
  game5_image5 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/dynastywarriors5.jpg",
      user_id = 4,
      game_id = 5
  )
  game5_image6 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/dynastywarriors6.jpg",
      user_id = 4,
      game_id = 5
  )
  game5_image7 = Image(
      image ="https://vaporgames.s3.us-west-1.amazonaws.com/dynast_warriors_extremelegends_7.png",
      user_id= 4,
      game_id = 5
  )


  # attack on titans
  game6_image1= Image(
      image="https://vaporgames.s3.us-west-1.amazonaws.com/attackontitan1.jpg",
      user_id = 2,
      game_id = 6,
  )
  game6_image2 = Image(
      image="https://vaporgames.s3.us-west-1.amazonaws.com/attackontitan2.jpg",
      user_id = 2,
      game_id = 6,
  )
  game6_image3 = Image(
      image="https://vaporgames.s3.us-west-1.amazonaws.com/attackontitan3.jpg",
      user_id = 2,
      game_id = 6,
  )
  game6_image4 = Image(
      image="https://vaporgames.s3.us-west-1.amazonaws.com/attackontitan4.jpg",
      user_id = 2,
      game_id = 6,
  )
  game6_image5 = Image(
      image="https://vaporgames.s3.us-west-1.amazonaws.com/attackontitan5.jpg",
      user_id = 2,
      game_id = 6,
  )
  game6_image6 = Image(
      image="https://vaporgames.s3.us-west-1.amazonaws.com/attackontitan6.png",
      user_id = 2,
      game_id = 6,
  )
  game6_image7 = Image(
      image="https://vaporgames.s3.us-west-1.amazonaws.com/attackontitan_7.png",
      user_id = 2,
      game_id = 6
  )


  # dune spice wars
  game7_image1 = Image(
      image="https://vaporgames.s3.us-west-1.amazonaws.com/dune1.jpg",
      user_id = 3,
      game_id = 7,
  )
  game7_image2 = Image(
      image="https://vaporgames.s3.us-west-1.amazonaws.com/dune2.jpg",
      user_id = 3,
      game_id = 7,
  )
  game7_image3 = Image(
      image="https://vaporgames.s3.us-west-1.amazonaws.com/dune3.jpg",
      user_id = 3,
      game_id = 7,
  )
  game7_image4 = Image(
      image="https://vaporgames.s3.us-west-1.amazonaws.com/dune4.jpg",
      user_id = 3,
      game_id = 7,
  )
  game7_image5 = Image(
      image="https://vaporgames.s3.us-west-1.amazonaws.com/dune5.jpg",
      user_id = 3,
      game_id = 7,
  )
  game7_image6 = Image(
      image="https://vaporgames.s3.us-west-1.amazonaws.com/dune6.png",
      user_id = 3,
      game_id = 7,
  )
  game7_image7 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/dunce_spicewars_7.png",
      user_id = 3,
      game_id = 7
  )


  # star wars battlefront
  game8_image1 = Image(
      image="https://vaporgames.s3.us-west-1.amazonaws.com/starwarsbattlefront1.jpg",
      user_id=1,
      game_id=8,
  )
  game8_image2 = Image(
      image="https://vaporgames.s3.us-west-1.amazonaws.com/starwarsbattlefront2.jpg",
      user_id=1,
      game_id=8,
  )
  game8_image3 = Image(
      image="https://vaporgames.s3.us-west-1.amazonaws.com/starwarsbattlefront3.jpg",
      user_id=1,
      game_id=8,
  )
  game8_image4 = Image(
      image="https://vaporgames.s3.us-west-1.amazonaws.com/starwarsbattlefront4.jpg",
      user_id=1,
      game_id=8,
  )
  game8_image5 = Image(
      image="https://vaporgames.s3.us-west-1.amazonaws.com/starwarsbattlefront5.jpg",
      user_id=1,
      game_id=8,
  )
  game8_image6 = Image(
      image="https://vaporgames.s3.us-west-1.amazonaws.com/starwarsbattlefront6.png",
      user_id=1,
      game_id=8,
  )
  game8_image7 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/star_wars_battlefront_II_7.png",
      user_id = 1,
      game_id = 8
  )


  # fifa
  game9_image1 = Image(
      image="https://vaporgames.s3.us-west-1.amazonaws.com/fifa221.jpg",
      user_id=2,
      game_id=9
  )
  game9_image2 = Image(
      image="https://vaporgames.s3.us-west-1.amazonaws.com/fifa222.jpg",
      user_id=2,
      game_id=9
  )
  game9_image3 = Image(
      image="https://vaporgames.s3.us-west-1.amazonaws.com/fifa223.jpg",
      user_id=2,
      game_id=9
  )
  game9_image4 = Image(
      image="https://vaporgames.s3.us-west-1.amazonaws.com/fifa224.jpg",
      user_id=2,
      game_id=9
  )
  game9_image5 = Image(
      image="https://vaporgames.s3.us-west-1.amazonaws.com/fifa225.jpg",
      user_id=2,
      game_id=9
  )
  game9_image6 = Image(
      image="https://vaporgames.s3.us-west-1.amazonaws.com/fifa226.png",
      user_id=2,
      game_id=9
  )
  game9_image7 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/fifa22_7.jpg",
      user_id = 2,
      game_id = 9
  )


  # madden nfl
  game10_image1 = Image(
      image="https://vaporgames.s3.us-west-1.amazonaws.com/madden221.jpg",
      user_id=2,
      game_id=10
  )
  game10_image2 = Image(
      image="https://vaporgames.s3.us-west-1.amazonaws.com/madden222.jpg",
      user_id=2,
      game_id=10
  )
  game10_image3 = Image(
      image="https://vaporgames.s3.us-west-1.amazonaws.com/madden223.jpg",
      user_id=2,
      game_id=10
  )
  game10_image4 = Image(
      image="https://vaporgames.s3.us-west-1.amazonaws.com/madden224.jpg",
      user_id=2,
      game_id=10
  )
  game10_image5 = Image(
      image="https://vaporgames.s3.us-west-1.amazonaws.com/madden225.jpg",
      user_id=2,
      game_id=10
  )
  game10_image6 = Image(
      image="https://vaporgames.s3.us-west-1.amazonaws.com/madden226.png",
      user_id=2,
      game_id=10
  )
  game10_image7 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/madden22_7.jpg",
      user_id = 2,
      game_id = 10
  )


  # witcher 3
  game11_image1 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/witcher3_1.png",
      user_id = 4,
      game_id = 11
  )
  game11_image2 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/witcher3_2.jpg",
      user_id = 4,
      game_id = 11
  )
  game11_image3 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/witcher3_3.jpg",
      user_id = 4,
      game_id = 11
  )
  game11_image4 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/witcher3_4.jpg",
      user_id = 4,
      game_id = 11
  )
  game11_image5 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/witcher3_5.jpg",
      user_id = 4,
      game_id = 11
  )
  game11_image6 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/witcher3_6.png",
      user_id = 4,
      game_id = 11
  )
  game11_image7 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/witcher3_7.jpg",
      user_id = 4,
      game_id = 11
  )


  # borderlands 2
  game12_image1 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/borderlands2_1.jpg",
      user_id = 4,
      game_id = 12
  )
  game12_image2 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/borderlands2_2.jpg",
      user_id = 4,
      game_id = 12
  )
  game12_image3 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/borderlands2_3.jpg",
      user_id = 4,
      game_id = 12
  )
  game12_image4 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/borderlands2_4.jpg",
      user_id = 4,
      game_id = 12
  )
  game12_image5 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/borderlands2_5.jpg",
      user_id = 4,
      game_id = 12
  )
  game12_image6 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/borderlands2_6.jpg",
      user_id = 4,
      game_id = 12
  )
  game12_image7 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/borderlands2_7.jpg",
      user_id = 4,
      game_id = 12
  )


  # valorant
  game13_image1 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/valorant_1.jpg",
      user_id = 4,
      game_id = 13
  )
  game13_image2 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/valorant_2.jpg",
      user_id = 4,
      game_id = 13
  )
  game13_image3 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/valorant_3.jpg",
      user_id = 4,
      game_id = 13
  )
  game13_image4 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/valorant_4.jpg",
      user_id = 4,
      game_id = 13
  )
  game13_image5 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/valorant_5.jpg",
      user_id = 4,
      game_id = 13
  )
  game13_image6 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/valorant_6.png",
      user_id = 4,
      game_id = 13
  )
  game13_image7 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/valorant_7.jpg",
      user_id = 4,
      game_id = 13
  )


  # league of legends (LoL)
  game14_image1 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/league_1.jpg",
      user_id = 4,
      game_id = 14
  )
  game14_image2 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/league_2.jpg",
      user_id = 4,
      game_id = 14
  )
  game14_image3 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/league_3.jpeg",
      user_id = 4,
      game_id = 14
  )
  game14_image4 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/league_4.png",
      user_id = 4,
      game_id = 14
  )
  game14_image5 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/league_5.jpg",
      user_id = 4,
      game_id = 14
  )
  game14_image6 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/league_6.png",
      user_id = 4,
      game_id = 14
  )
  game14_image7 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/league_7.png",
      user_id = 4,
      game_id = 14
  )


  # assassin creed 2 (ac2)
  game15_image1 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/ac2_1.jpg",
      user_id = 4,
      game_id = 15
  )
  game15_image2 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/ac2_2.jpg",
      user_id = 4,
      game_id = 15
  )
  game15_image3 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/ac2_3.jpg",
      user_id = 4,
      game_id = 15
  )
  game15_image4 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/ac2_4.jpg",
      user_id = 4,
      game_id = 15
  )
  game15_image5 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/ac2_5.jpg",
      user_id = 4,
      game_id = 15
  )
  game15_image6 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/ac2_6.png",
      user_id = 4,
      game_id = 15
  )
  game15_image7 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/ac2_7.png",
      user_id = 4,
      game_id = 15
  )


  # rocket league
  game16_image1 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/rocket_1.jpg",
      user_id = 4,
      game_id = 16
  )
  game16_image2 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/rocket_2.jpg",
      user_id = 4,
      game_id = 16
  )
  game16_image3 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/rocket_3.jpg",
      user_id = 4,
      game_id = 16
  )
  game16_image4 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/rocket_4.jpg",
      user_id = 4,
      game_id = 16
  )
  game16_image5 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/rocket_5.jpg",
      user_id = 4,
      game_id = 16
  )
  game16_image6 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/rocket_6.png",
      user_id = 4,
      game_id = 16
  )
  game16_image7 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/rocket_7.png",
      user_id = 4,
      game_id = 16
  )


  # warframe
  game17_image1 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/warframe_1.png",
      user_id = 4,
      game_id = 17
  )
  game17_image2 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/warframe_2.jpg",
      user_id = 4,
      game_id = 17
  )
  game17_image3 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/warframe_3.jpg",
      user_id = 4,
      game_id = 17
  )
  game17_image4 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/warframe_4.jpg",
      user_id = 4,
      game_id = 17
  )
  game17_image5 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/warframe_5.jpg",
      user_id = 4,
      game_id = 17
  )
  game17_image6 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/warframe_6.png",
      user_id = 4,
      game_id = 17
  )
  game17_image7 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/warframe_7.png",
      user_id = 4,
      game_id = 17
  )


  # minecraft
  game18_image1 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/minecraft_1.png",
      user_id = 4,
      game_id = 18,
  )
  game18_image2 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/minecraft_2.jpg",
      user_id = 4,
      game_id = 18,
  )
  game18_image3 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/minecraft_3.jpg",
      user_id = 4,
      game_id = 18,
  )
  game18_image4 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/minecraft_4.png",
      user_id = 4,
      game_id = 18,
  )
  game18_image5 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/minecraft_5.png",
      user_id = 4,
      game_id = 18,
  )
  game18_image6 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/minecraft_6.png",
      user_id = 4,
      game_id = 18,
  )
  game18_image7 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/minecraft_7.png",
      user_id = 4,
      game_id = 18,
  )


  # ocarina
  game19_image1 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/zelda_1.jpg",
      user_id = 4,
      game_id = 19
  )
  game19_image2 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/zelda_2.png",
      user_id = 4,
      game_id = 19
  )
  game19_image3 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/zelda_3.jpg",
      user_id = 4,
      game_id = 19
  )
  game19_image4 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/zelda_4.jpg",
      user_id = 4,
      game_id = 19
  )
  game19_image5 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/zelda_5.jpg",
      user_id = 4,
      game_id = 19
  )
  game19_image6 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/zelda_6.png",
      user_id = 4,
      game_id = 19
  )
  game19_image7 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/zelda_7.png",
      user_id = 4,
      game_id = 19
  )

  # banana shooter
  game20_image1 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/bananashooter_1.jpg",
      user_id = 4,
      game_id = 20
  )
  game20_image2 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/bananashooter_2.jpg",
      user_id = 4,
      game_id = 20
  )
  game20_image3 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/bananashooter_3.jpg",
      user_id = 4,
      game_id = 20
  )
  game20_image4 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/bananashooter_4.jpg",
      user_id = 4,
      game_id = 20
  )
  game20_image5 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/bananashooter_5.jpg",
      user_id = 4,
      game_id = 20
  )
  game20_image6 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/bananashooter_6.png",
      user_id = 4,
      game_id = 20
  )
  game20_image7 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/bananashooter_7.png",
      user_id = 4,
      game_id = 20
  )


  db.session.add_all([ game1_image1, game1_image2, game1_image3, game1_image4, game1_image5, game1_image6, game1_image7,
                       game2_image1, game2_image2, game2_image3, game2_image4, game2_image5, game2_image6, game2_image7,
                       game3_image1, game3_image2, game3_image3, game3_image4, game3_image5, game3_image6, game3_image7,
                       game4_image1, game4_image2, game4_image3, game4_image4, game4_image5, game4_image6, game4_image7,
                       game5_image1, game5_image2, game5_image3, game5_image4, game5_image5, game5_image6, game5_image7,
                       game6_image1, game6_image2, game6_image3, game6_image4, game6_image5, game6_image6, game6_image7,
                       game7_image1, game7_image2, game7_image3, game7_image4, game7_image5, game7_image6, game7_image7,
                       game8_image1, game8_image2, game8_image3, game8_image4, game8_image5, game8_image6, game8_image7,
                       game9_image1, game9_image2, game9_image3, game9_image4, game9_image5, game9_image6, game9_image7,
                       game10_image1, game10_image2, game10_image3, game10_image4, game10_image5, game10_image6, game10_image7,
                       game11_image1, game11_image2, game11_image3, game11_image4, game11_image5, game11_image6, game11_image7,
                       game12_image1, game12_image2, game12_image3, game12_image4, game12_image5, game12_image6, game12_image7,
                       game13_image1, game13_image2, game13_image3, game13_image4, game13_image5, game13_image6, game13_image7,
                       game14_image1, game14_image2, game14_image3, game14_image4, game14_image5, game14_image6, game14_image7,
                       game15_image1, game15_image2, game15_image3, game15_image4, game15_image5, game15_image6, game15_image7,
                       game16_image1, game16_image2, game16_image3, game16_image4, game16_image5, game16_image6, game16_image7,
                       game17_image1, game17_image2, game17_image3, game17_image4, game17_image5, game17_image6, game17_image7,
                       game18_image1, game18_image2, game18_image3, game18_image4, game18_image5, game18_image6, game18_image7,
                       game19_image1, game19_image2, game19_image3, game19_image4, game19_image5, game19_image6, game19_image7,
                       game20_image1, game20_image2, game20_image3, game20_image4, game20_image5, game20_image6, game20_image7,
                       ])
  db.session.commit()

def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()

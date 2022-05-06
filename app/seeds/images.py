from app.models import db
from app.models.image import Image

def seed_images():
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
      user_id = 5,
      game_id = 4
  )

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


  db.session.add_all([ game1_image1, game1_image2, game1_image3, game1_image4, game1_image5, game1_image6,
                       game2_image1, game2_image2, game2_image3, game2_image4, game2_image5, game2_image6,
                       game3_image1, game3_image2, game3_image3, game3_image4, game3_image5, game3_image6,
                       game4_image1, game4_image2, game4_image3, game4_image4, game4_image5, game4_image6,
                       game5_image1, game5_image2, game5_image3, game5_image4, game5_image5, game5_image6,
                       game6_image1, game6_image2, game6_image3, game6_image4, game6_image5, game6_image6,
                       game7_image1, game7_image2, game7_image3, game7_image4, game7_image5, game7_image6,
                       game8_image1, game8_image2, game8_image3, game8_image4, game8_image5, game8_image6,
                       game9_image1, game9_image2, game9_image3, game9_image4, game9_image5, game9_image6,
                       game10_image1, game10_image2, game10_image3, game10_image4, game10_image5, game10_image6,])
  db.session.commit()

def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()

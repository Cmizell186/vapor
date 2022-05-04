from app.models import db
from app.models.image import Image

def seed_images():
  game1_image1 = Image(
    image = "https://vaporgames.s3.us-west-1.amazonaws.com/elden1.jpg",
    user_id = 2,
    game_id = 1
  )
  game1_image2 = Image(
    image = "https://vaporgames.s3.us-west-1.amazonaws.com/elden2.jpg",
    user_id = 2,
    game_id = 1
  )
  game1_image3 = Image(
    image = "https://vaporgames.s3.us-west-1.amazonaws.com/elden3.jpg",
    user_id = 2,
    game_id = 1
  )
  game1_image4 = Image(
    image = "https://vaporgames.s3.us-west-1.amazonaws.com/elden4.jpg",
    user_id = 2,
    game_id = 1
  )
  game1_image5 = Image(
    image = "https://vaporgames.s3.us-west-1.amazonaws.com/elden5.jpg",
    user_id = 2,
    game_id = 1
  )
  game1_image6 = Image(
      image = "https://vaporgames.s3.us-west-1.amazonaws.com/29af841be77c429299664545199b2db8.jpg",
      user_id = 2,
      game_id = 1
  )

  db.session.add_all([ game1_image6, game1_image1, game1_image2, game1_image3, game1_image4, game1_image5])
  db.session.commit()

def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()

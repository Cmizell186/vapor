from app.models import db
from app.models.tag import Tag

def seed_tags():
  tag1 = Tag(game_id = 1, genre_id = 9)
  tag2 = Tag(game_id = 1, genre_id = 4)
  tag3 = Tag(game_id = 2, genre_id = 8)
  tag4 = Tag(game_id = 3, genre_id = 3)
  tag5 = Tag(game_id = 3, genre_id = 4)
  tag6 = Tag(game_id = 3, genre_id = 10)
  tag6 = Tag(game_id = 4, genre_id = 9)
  tag7 = Tag(game_id = 4, genre_id = 4)
  tag8 = Tag(game_id = 5, genre_id = 3)
  tag9 = Tag(game_id = 6, genre_id = 3)
  tag10 = Tag(game_id = 7, genre_id = 3)
  tag11 = Tag(game_id = 8, genre_id = 7)
  tag12 = Tag(game_id = 9, genre_id = 11)
  tag13 = Tag(game_id = 10, genre_id = 11)

  db.session.add_all([tag1, tag2, tag3, tag4, tag5, tag6, tag7, tag8, tag9, tag10, tag11, tag12, tag13])

  db.session.commit()

def undo_tags():
    db.session.execute('TRUNCATE games RESTART IDENTITY CASCADE;')
    db.session.commit()

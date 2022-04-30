from app.models import db, User
from app.models.genre import Genre

def seed_genres():
  freetoplay = Genre(
    title="Free to Play"
  )
  earlyaccess = Genre(
    title="Early Access"
  )
  action = Genre(
    title="Action"
  )
  adventure = Genre(
    title="Adventure"
  )
  dirtycasual = Genre(
    title="Casual"
  )
  indie = Genre(
    title="Indie"
  )
  mmo = Genre(
    title="Massively Multiplayer"
  )
  racing = Genre(
    title="Racing"
  )
  rpg = Genre(
    title="RPG"
  )
  simulation = Genre(
    title="Simulation"
  )
  sports = Genre(
    title="Sports"
  )
  strategy = Genre(
    title="Strategy"
  )
  datingsims = Genre(
    title="Dating Sims for Chris"
  )

  db.session.add_all([freetoplay, earlyaccess, action,
                      adventure, dirtycasual, indie, mmo, racing,
                      rpg, simulation, sports, strategy, datingsims])

  db.session.commit()


def undo_genres():
  db.session.execute('TRUNCATE genres RESTART IDENTITY CASCADE;')
  db.session.commit()

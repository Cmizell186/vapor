from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='BreadSimpson', email='demo@aa.io', password='password')
    damian = User(
        username='DeityZero', email='damian@damian.com', password='juan')
    jason = User(
        username='Wonkers', email='jason@jason.com', password='jason')
    chris = User(
        username='Lil Meat', email='chris@chris.com', password='chris')
    jared = User(
        username='Purity', email='jared@jared.com', password='jared')

    db.session.add(demo)
    db.session.add(damian)
    db.session.add(jason)
    db.session.add(chris)
    db.session.add(jared)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()

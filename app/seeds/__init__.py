from flask.cli import AppGroup
from .users import seed_users, undo_users
from .games import seed_games, undo_games
from .genres import seed_genres, undo_genres
from .libraries import seed_libraries, undo_libraries
from .tags import seed_tags, undo_tags
from .reviews import seed_reviews, undo_reviews
from .images import seed_images, undo_images
from .userImages import seed_userImages, undo_userImages
# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    # Add other seed functions here
    seed_games()
    seed_genres()
    seed_libraries()
    seed_tags()
    seed_reviews()
    seed_images()
    seed_userImages()

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    # Add other undo functions here
    undo_games()
    undo_genres()
    undo_libraries()
    undo_tags()
    undo_reviews()
    undo_images()
    undo_userImages()

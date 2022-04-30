from flask.cli import AppGroup
from .users import seed_users, undo_users
from .games import seed_games, undo_games
from .genres import seed_genres, undo_genres
from .libraries import seed_libraries, undo_libraries
from .tags import seed_tags, undo_tags

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

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    # Add other undo functions here
    undo_games()
    undo_genres()
    undo_libraries()
    undo_tags()


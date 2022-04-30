from flask import Blueprint, jsonify
from app.models import Game, db

game_routes = Blueprint('games', __name__)

@game_routes.route('/')
def get_games():
    games_list = Game.query.all()
    print(games_list)

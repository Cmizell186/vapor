from flask import Blueprint, jsonify
from app.models import Game, db

game_routes = Blueprint('games', __name__)

@game_routes.route('/')
def get_games():
    games_list = Game.query.all()
    print(games_list)
    return {'games_list': [game.to_dict() for game in games_list]}

@game_routes.route('/<int:id>')
def get_specific_game(id):
    specific_game = Game.query.get(id)
    print(specific_game)
    return specific_game

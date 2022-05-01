from crypt import methods
from flask import Blueprint, jsonify, request
from app.models import Game, db
from app.forms.create_game_form import CreateGame

game_routes = Blueprint('games', __name__)

@game_routes.route('/')
def get_games():
    games_list = Game.query.all()
    # print({'games_list': [game.to_dict() for game in games_list]})
    return {'games_list': [game.to_dict() for game in games_list]}

@game_routes.route('/', methods=["POST"])
def post_games():
    # print("========++++++++++++++>", request.data)
    form = CreateGame()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        game = Game(
            title = form.title.data,
            price = form.price.data,
            description = form.description.data,
            release_date = form.release_date.data,
            is_mature = form.is_mature.data,
            video = form.video.data,
            img = form.img.data,
            developer = form.developer.data
        )
        db.session.add(game)
        db.session.commit()
        return game.to_dict()
    else:
        print(form.errors)
        return "Bad data"

@game_routes.route('/<int:id>')
def get_specific_game(id):
    game = Game.query.get(id)
    # print('================', game.to_dict())
    return {'game': game.to_dict()}

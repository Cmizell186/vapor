from crypt import methods
from flask import Blueprint, jsonify, request
from flask_login import current_user
from app.models import Game, db
from app.forms.create_game_form import CreateGame
from app.forms.edit_game_form import EditGame
from app.s3config import (
    upload_file_to_s3, allowed_file, get_unique_filename)

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
            developer = form.developer.data,
            user_id = current_user.id
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

@game_routes.route('/<int:id>', methods=["POST"])
def edit_game(id):
    form = EditGame()
    form['csrf_token'].data = request.cookies['csrf_token']

    game = Game.query.get(id)
    print(game.to_dict(), "====================================================")
    print(form.is_mature.data, '*********')
    if request.method == "POST":
        if (game):
            game.title = form.title.data
            game.price = form.price.data
            game.description = form.description.data
            game.release_date = form.release_date.data
            game.is_mature = form.is_mature.data
            game.video = form.video.data
            game.developer = form.developer.data
            game.user_id = current_user.id
        db.session.commit()
        print(game.to_dict(), "=========================================>>>>")
        return game.to_dict()
    else:
        print(form.errors)
        return "Bad data"


@game_routes.route('<int:id>', methods=["DELETE"])
def delete_game(id):
    game = db.session.query(Game).filter(Game.id == id).first()
    # game = Game.query.filter(Game.id == id).first()
    db.session.delete(game)
    db.session.commit()
    return "successful delete"

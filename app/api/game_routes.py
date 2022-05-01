from crypt import methods
from flask import Blueprint, jsonify, request
from app.models import Game, db
from app.forms.create_game_form import CreateGame
from app.s3config import (
    upload_file_to_s3, allowed_file, get_unique_filename)

game_routes = Blueprint('games', __name__)

@game_routes.route('/')
def get_games():
    games_list = Game.query.all()
    # print({'games_list': [game.to_dict() for game in games_list]})
    return {'games_list': [game.to_dict() for game in games_list]}


# helper function for uploading game image
def upload_game_image():
    if "image" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["image"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesnt have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload['url']


@game_routes.route('/', methods=["POST"])
def post_games():
    # print("========++++++++++++++>", request.data)
    form = CreateGame()
    form['csrf_token'].data = request.cookies['csrf_token']


    # for adding image to s3 bucket
    if "image" not in request.files:
        return {"errors": "image required"}, 400
    image = request.files["image"]
    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400
    image.filename = get_unique_filename(image.filename)
    upload = upload_file_to_s3(image)
    if "url" not in upload:
        # if the dictionary doesnt have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400
    url = upload['url']
    # end of s3 bucket adding

    if form.validate_on_submit():
        game = Game(
            title = form.title.data,
            price = form.price.data,
            description = form.description.data,
            release_date = form.release_date.data,
            is_mature = form.is_mature.data,
            video = form.video.data,
            img = url,
            developer = form.developer.data
        )
        print(game)
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

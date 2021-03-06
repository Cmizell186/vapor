from flask import Blueprint, request
from app.models import db, Image, UserImage
from flask_login import current_user
from app.forms.image_form import CreateImage # wip will come back to this for csrf
from app.s3config import (
    upload_file_to_s3, allowed_file, get_unique_filename)

image_routes = Blueprint("images", __name__)

# get all user images
@image_routes.route("")
def get_images():
    all_images = UserImage.query.all()
    return {'all_images': [img.to_dict() for img in all_images]}

# get user image
@image_routes.route("/<int:id>")
def get_single_image(id):
    user_image = UserImage.query.filter_by(user_id = id).all()
    return {"image": [pfp.to_dict() for pfp in user_image][-1]}



# upload user image to specific user page
@image_routes.route("/<int:id>", methods=["PUT"])
def upload_image(id):
    if "image" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["image"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]
    updated_pfp = UserImage.query.filter(UserImage.user_id==id).one()
    # print(updated_pfp.to_dict())
    updated_pfp.image = url
    db.session.commit()
    return updated_pfp.to_dict()



# posting to a specific game page
@image_routes.route("/game/<int:id>", methods=["POST"])
def upload_image_to_game(id):
    if "image" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["image"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]
    # flask_login allows us to get the current user from the request
    new_game_image = Image(image=url, user_id=current_user.id, game_id=id)
    db.session.add(new_game_image)
    db.session.commit()
    return new_game_image.to_dict()


@image_routes.route('/game/<int:id>')
def get_all_images_for_game(id):
    games_images = Image.query.filter_by(game_id=id).all()
    return {"game_images":[img.to_dict() for img in games_images]}

# delete specific game image
@image_routes.route('/game/<int:id>/images/<int:photoId>', methods=["DELETE"])
def delete_one_game_image(id, photoId):
    game_image = Image.query.filter(Image.id == photoId and Image.game_id == id).delete()
    db.session.commit()
    return "deleted image"

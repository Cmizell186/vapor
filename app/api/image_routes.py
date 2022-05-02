from flask import Blueprint, request
from app.models import db, Image
from flask_login import current_user
from app.s3config import (
    upload_file_to_s3, allowed_file, get_unique_filename)

image_routes = Blueprint("images", __name__)

@image_routes.route("")
def get_images():
    all_images = Image.query.all()
    return {'all_images': [img.to_dict() for img in all_images]}


@image_routes.route("", methods=["POST"])
def upload_image():
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
    new_image = Image(image=url, user_id=current_user.id, game_id=1)
    db.session.add(new_image)
    db.session.commit()
    return {"image": url}

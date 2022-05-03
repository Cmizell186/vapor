from flask import Blueprint, request
from app.models import db, Library, Game, Image
from flask_login import current_user

cart_routes = Blueprint("carts", __name__)

@cart_routes.route('')
def get_carts():
  all_carts = Library.query.join(Game).all()
  # all_carts = db.session.query(Library).join(Game).join(Image).all()

  print(all_carts, "----------->")
  return {"carts": [cart.to_dict() for cart in all_carts]}

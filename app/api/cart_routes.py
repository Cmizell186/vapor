from flask import Blueprint, request, session
from app.models import db, Library, Game, Image
from flask_login import current_user

cart_routes = Blueprint("carts", __name__)

@cart_routes.route('')
def get_carts():
  all_carts = Library.query.join(Game).filter(current_user.id == Library.user_id).all()
  # all_carts = db.session.query(Library).join(Game).join(Image).all()
  return {"carts": [cart.to_dict() for cart in all_carts]}

@cart_routes.route('<int:id>', methods=["DELETE"])
def delete_cart(id):
  cart = Library.query.filter(Library.id == id).delete()
  db.session.commit()
  # print("reeached inside delete ------------------", cart)
  # if(cart.user_id == current_user.id):
  #   cart.delete()
  #   db.session.commit()
  #   return "Successful delete"
  return "successful delete"

from crypt import methods
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

@cart_routes.route('', methods=['POST'])
def create_cart():
  data = request.get_json()
  # print(data)
  # print(data['user_id'])
  new_cart = Library(
    user_id = data['user_id'],
    game_id = data['game_id'],
    is_owned = data['is_owned']
  )
  db.session.add(new_cart)
  db.session.commit()
  print(new_cart)
  return new_cart.to_dict()

@cart_routes.route('/', methods=['PUT'])
def update_cart():
  data = request.get_json()
  carts_list = []
  for entry in data:
    library = Library.query.get(entry['id'])
    library.is_owned = True
    carts_list.append(library.to_dict())

  db.session.commit()
  return {'carts': carts_list}

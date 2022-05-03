from flask import Blueprint, request
from app.models import db, Library
from flask_login import current_user

cart_routes = Blueprint("carts", __name__)

@cart_routes.route('')
def get_carts():
  all_carts = Library.query.all()
  return {"carts": [cart.to_dict() for cart in all_carts]}

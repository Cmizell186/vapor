from flask import Blueprint, jsonify
from app.models import Review, db

review_routes = Blueprint('reviews', __name__)

@review_routes.route('/')
def get_reviews():
  reviews_list = Review.query.all()
  return {'reviews_list': [review.to_dict() for review in reviews_list]}

@review_routes.route('/<int:id>')
def get_specific_review(id):
  specific_review = Review.query.get(id)
  return specific_review

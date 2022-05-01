from flask import Blueprint, jsonify, request
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


@review_routes.route('/<int:id>', methods=["POST"])
def post_review():
    form = CreateReview()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        review = Review(
            is_recommended = form.is_recommended.data,
            content = form.content.data,
            game_id = form.game_id.data,
            user_id = form.user_id.data,
        )
        db.session.add(review)
        db.session.commit()
        return review.to_dict()
    else:
        print(form.errors)
        return "Bad data"

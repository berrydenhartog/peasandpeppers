from flask import jsonify, request, g, url_for, current_app
from .. import db
from ..models import Product, Permission, Review
from . import api
from .decorators import permission_required


@api.route('/reviews/')
def get_reviews():
    page = request.args.get('page', 1, type=int)
    pagination = Review.query.order_by(Review.timestamp.desc()).paginate(
        page, per_page=10,
        error_out=False)
    reviews = pagination.items
    prev = None
    if pagination.has_prev:
        prev = url_for('api.get_reviews', page=page-1)
    next = None
    if pagination.has_next:
        next = url_for('api.get_reviews', page=page+1)
    return jsonify({
        'reviews': [review.to_json() for review in reviews],
        'prev': prev,
        'next': next,
        'count': pagination.total
    })


@api.route('/reviews/<int:id>')
def get_review(id):
    review = Review.query.get_or_404(id)
    return jsonify(review.to_json())


@api.route('/products/<int:id>/reviews/')
def get_product_reviews(id):
    product = Product.query.get_or_404(id)
    page = request.args.get('page', 1, type=int)
    pagination = product.reviews.order_by(Review.timestamp.asc()).paginate(
        page, per_page=10,
        error_out=False)
    reviews = pagination.items
    prev = None
    if pagination.has_prev:
        prev = url_for('api.get_product_reviews', id=id, page=page-1)
    next = None
    if pagination.has_next:
        next = url_for('api.get_product_reviews', id=id, page=page+1)
    return jsonify({
        'reviews': [review.to_json() for review in reviews],
        'prev': prev,
        'next': next,
        'count': pagination.total
    })


@api.route('/products/<int:id>/reviews/', methods=['POST'])
@permission_required(Permission.REVIEW)
def new_product_review(id):
    product = Product.query.get_or_404(id)
    review = Review.from_json(request.json)
    review.author = g.current_user
    review.product = product
    db.session.add(review)
    db.session.commit()
    return jsonify(review.to_json()), 201, \
        {'Location': url_for('api.get_review', id=review.id)}

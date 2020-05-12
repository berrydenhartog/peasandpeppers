from flask import jsonify, request, current_app, url_for
from . import api
from ..models import User, Product


@api.route('/users/<int:id>')
def get_user(id):
    user = User.query.get_or_404(id)
    return jsonify(user.to_json())


@api.route('/users/<int:id>/products/')
def get_user_products(id):
    user = User.query.get_or_404(id)
    page = request.args.get('page', 1, type=int)
    pagination = user.products.order_by(Product.timestamp.desc()).paginate(
        page, per_page=10,
        error_out=False)
    products = pagination.items
    prev = None
    if pagination.has_prev:
        prev = url_for('api.get_user_products', id=id, page=page-1)
    next = None
    if pagination.has_next:
        next = url_for('api.get_user_products', id=id, page=page+1)
    return jsonify({
        'products': [product.to_json() for product in products],
        'prev': prev,
        'next': next,
        'count': pagination.total
    })

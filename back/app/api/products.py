from flask import jsonify, request, g, url_for, current_app
from .. import db
from ..models import Product, Permission
from . import api
from .decorators import permission_required
from .errors import forbidden


@api.route('/products/')
def get_products():
    page = request.args.get('page', 1, type=int)
    pagination = Product.query.paginate(
        page, per_page=10,
        error_out=False)
    products = pagination.items
    prev = None
    if pagination.has_prev:
        prev = url_for('api.get_products', page=page-1)
    next = None
    if pagination.has_next:
        next = url_for('api.get_products', page=page+1)
    return jsonify({
        'products': [product.to_json() for product in products],
        'prev': prev,
        'next': next,
        'count': pagination.total
    })


@api.route('/products/<int:id>')
def get_product(id):
    product = Product.query.get_or_404(id)
    return jsonify(product.to_json())


@api.route('/products/', methods=['POST'])
@permission_required(Permission.MODERATE)
def new_product():
    product = Product.from_json(request.json)
    product.author = g.current_user
    db.session.add(product)
    db.session.commit()
    return jsonify(product.to_json()), 201, \
        {'Location': url_for('api.get_product', id=product.id)}


@api.route('/products/<int:id>', methods=['PUT'])
@permission_required(Permission.MODERATE)
def edit_product(id):
    product = Product.query.get_or_404(id)
    if g.current_user != product.author and \
            not g.current_user.can(Permission.ADMIN):
        return forbidden('Insufficient permissions')
    product.body = request.json.get('body', product.body)
    db.session.add(product)
    db.session.commit()
    return jsonify(product.to_json())

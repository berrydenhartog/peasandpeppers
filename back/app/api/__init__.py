from flask import Blueprint

api = Blueprint('api', __name__)

from . import authentication, products, users, reviews, errors

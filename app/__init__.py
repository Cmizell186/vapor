import os
import traceback
from flask import Flask, render_template, request, session, redirect, current_app
from flask_cors import CORS
from flask_migrate import Migrate
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_login import LoginManager

from .models import db, User
from .api.user_routes import user_routes
from .api.auth_routes import auth_routes
from .api.game_routes import game_routes
from .api.review_routes import review_routes
from .api.image_routes import image_routes
from .api.cart_routes import cart_routes
from .seeds import seed_commands

from .config import Config

app = Flask(__name__, static_folder='../react-app/build', static_url_path='/')

# Setup login manager
login = LoginManager(app)
login.login_view = 'auth.unauthorized'


@login.user_loader
def load_user(id):
    return User.query.get(int(id))


# Tell flask about our seed commands
app.cli.add_command(seed_commands)

app.config.from_object(Config)
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(auth_routes, url_prefix='/api/auth')
app.register_blueprint(game_routes, url_prefix='/api/games') #Created Games Routes <---
app.register_blueprint(review_routes, url_prefix='/api/reviews')
app.register_blueprint(image_routes, url_prefix='/api/images') #Created Images Routes <---
app.register_blueprint(cart_routes, url_prefix='/api/carts')
db.init_app(app)
Migrate(app, db)

# Application Security
CORS(app)


# Since we are deploying with Docker and Flask,
# we won't be using a buildpack when we deploy to Heroku.
# Therefore, we need to make sure that in production any
# request made over http is redirected to https.
# Well.........
@app.before_request
def https_redirect():
    if os.environ.get('FLASK_ENV') == 'production':
        if request.headers.get('X-Forwarded-Proto') == 'http':
            url = request.url.replace('http://', 'https://', 1)
            code = 301
            return redirect(url, code=code)


@app.after_request
def inject_csrf_token(response):
    response.set_cookie(
        'csrf_token',
        generate_csrf(),
        secure=True if os.environ.get('FLASK_ENV') == 'production' else False,
        samesite='Strict' if os.environ.get(
            'FLASK_ENV') == 'production' else None,
        httponly=True)
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    print(f"DEBUG-ROUTE: Handling path: '{path}'")
    print(f"DEBUG-ROUTE: Static folder: {app.static_folder}")
    print(f"DEBUG-ROUTE: Static URL path: {app.static_url_path}")
    print(f"DEBUG-ROUTE: FLASK_ENV: {os.environ.get('FLASK_ENV')}")
    print(f"DEBUG-ROUTE: Request method: {request.method}")

    # Handle favicon
    if path == 'favicon.ico':
        print("DEBUG-ROUTE: Serving favicon")
        try:
            return app.send_static_file('favicon.ico')
        except Exception as e:
            print(f"DEBUG-ROUTE: Error serving favicon: {str(e)}")
            print(f"DEBUG-ROUTE: {traceback.format_exc()}")
            return str(e), 500

    # Handle API routes (these should be caught by blueprints earlier)
    if path.startswith('api/'):
        print(f"DEBUG-ROUTE: API route reached react_root: '{path}'")
        return {"errors": ["API endpoint not found"]}, 404

    # Handle static files
    if path.startswith('static/'):
        print(f"DEBUG-ROUTE: Attempting to serve static file: '{path}'")
        try:
            return app.send_static_file(path[7:])  # Strip 'static/' prefix
        except Exception as e:
            print(f"DEBUG-ROUTE: Error serving static file '{path}': {str(e)}")
            print(f"DEBUG-ROUTE: {traceback.format_exc()}")

    # Default: serve index.html for all other routes
    print(f"DEBUG-ROUTE: Serving index.html for path: '{path}'")
    try:
        return app.send_static_file('index.html')
    except Exception as e:
        print(f"DEBUG-ROUTE: Error serving index.html: {str(e)}")
        print(f"DEBUG-ROUTE: {traceback.format_exc()}")
        return str(e), 500


@app.errorhandler(404)
def handle_404(e):
    path = request.path
    print(f"DEBUG-404: Caught 404 for path: '{path}'")
    print(f"DEBUG-404: Request method: {request.method}")
    print(f"DEBUG-404: Headers: {dict(request.headers)}")

    # For client-side routes, return the React app
    if not path.startswith('/api/') and not path.startswith('/static/'):
        print(f"DEBUG-404: Returning index.html for client-side route: '{path}'")
        try:
            return app.send_static_file('index.html')
        except Exception as ex:
            print(f"DEBUG-404: Error returning index.html: {str(ex)}")
            print(f"DEBUG-404: {traceback.format_exc()}")
            return str(ex), 500

    print(f"DEBUG-404: Not a client route, returning 404 for: '{path}'")
    return {"errors": ["Not found"]}, 404


@app.errorhandler(Exception)
def handle_exception(e):
    print(f"DEBUG-ERROR: Unhandled exception: {str(e)}")
    print(f"DEBUG-ERROR: {traceback.format_exc()}")
    print(f"DEBUG-ERROR: Request path: {request.path}")
    return {"errors": [str(e)]}, 500


@app.errorhandler(405)
def method_not_allowed(e):
    print(f"DEBUG-405: Method not allowed for path: '{request.path}'")
    print(f"DEBUG-405: Request method: {request.method}")
    return {"errors": ["Method Not Allowed"]}, 405

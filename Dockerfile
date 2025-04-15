# Start with the python:3.9 image
FROM python:3.9

# Install Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get update && apt-get install -y nodejs

# Set the following enviroment variables
ENV REACT_APP_BASE_URL=https://vapor-app-docker.onrender.com
ENV FLASK_APP=app
ENV FLASK_ENV=production
ENV SQLALCHEMY_ECHO=True
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

# Set the directory for upcoming commands
WORKDIR /var/www

# Copy all the files from your repo to the working directory
COPY . .

# Build the React app
RUN cd react-app && npm install && npm run build

# Run the next two python install commands with PIP
RUN pip install -r requirements.txt
RUN pip install psycopg2-binary

# Create static directory if it doesn't exist
RUN mkdir -p app/static

# Copy the built react app from the build directory to static directory
RUN cp -r react-app/build/* app/static/

# Start the flask environment
CMD gunicorn app:app

# Base image for Node.js
FROM node:16.20.2 AS node-base

# Set environment variable for MongoDB
ENV MONGODB_URL=mongodb+srv://ireport:!report@ireport.bq7gso9.mongodb.net/iReport

# Set working directory for Node.js app
WORKDIR /app

# Copy package.json and package-lock.json
COPY ./package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the Node.js application files
COPY . .

# Base image for Python
FROM python:3.9 AS python-base

# Set working directory for Python app
WORKDIR /src/AI_model

# Copy the requirements file
COPY ./src/AI_model/requirements.txt ./

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the Flask application files
COPY ./src/AI_model .

# Final image combining Node.js and Python environments
FROM node:16.20.2

# Set environment variable for MongoDB
ENV MONGODB_URL=mongodb+srv://ireport:!report@ireport.bq7gso9.mongodb.net/iReport

# Set working directory for the combined app
WORKDIR /app

# Copy Node.js application files from the node-base stage
COPY --from=node-base /app .

# Copy Python application files from the python-base stage
COPY --from=python-base /src/AI_model ./src/AI_model

# Expose ports for both Node.js and Flask apps
EXPOSE 8000 5000

# Command to run both Node.js and Flask apps
CMD ["sh", "-c", "npm run dev & python3 src/AI_model/app.py"]

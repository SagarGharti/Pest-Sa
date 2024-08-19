#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Define variables
BRANCH="develop-barsha"
APP_NAME="your-nextjs-app"

# Fetch the latest changes
git pull origin $BRANCH

# Install dependencies
yarn install

# Build the Next.js application
yarn run build

# Check if the app is already running
if pm2 list | grep -q "$APP_NAME"; then
    # If it is, reload it
    pm2 reload $APP_NAME
else
    # If it's not, start it
    pm2 start npm --name "$APP_NAME" -- start
fi

echo "Deployment completed successfully!"
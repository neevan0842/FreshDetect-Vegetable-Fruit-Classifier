# Use the official Node.js image
FROM node:22.14.0-alpine3.21

# Set working directory
WORKDIR /code

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all files to the container
COPY . .

# Expose port for Vite dev server
EXPOSE 5173

# Start Vite in development mode
CMD ["npm", "run", "dev", "--", "--host"]

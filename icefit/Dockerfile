# Use a Node.js base image
FROM node:latest AS build

# Set the working directory in the container
<<<<<<< HEAD
# Set the working directory in the container
=======
>>>>>>> 38bdd80c41c99f46f7c1855c9ce4a7c7d115ade4
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

<<<<<<< HEAD
# Install app dependencies
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Expose a port to communicate with the React app
EXPOSE 5173

# Start your React app
CMD ["npm", "run", "dev"]
=======
# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Stage 2 - Production environment
FROM nginx:alpine

# Copy the build output from the builder stage to the nginx directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to run the nginx server
CMD ["nginx", "-g", "daemon off;"]
>>>>>>> 38bdd80c41c99f46f7c1855c9ce4a7c7d115ade4

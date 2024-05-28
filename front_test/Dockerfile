# Stage 1 - Build the React app
FROM node:16 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the app
RUN npm run build

# Stage 2 - Serve the built app with a lightweight HTTP Server
FROM nginx:alpine

# Copy the built app from the previous stage (assuming the build output directory is named 'dist')
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

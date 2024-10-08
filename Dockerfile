# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/app

RUN npm i -g pnpm

# Set environment variables
ENV NODE_ENV=production

# Copy package.json and package-lock.json to the container
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy the rest of the application code to the container
COPY package.json next.config.js postcss.config.js prettier.config.js tailwind.config.js tsconfig.json ./
# COPY lib ./lib
COPY app ./app
# COPY components ./components

# Build app
RUN pnpm run build

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the Next.js app
CMD ["pnpm", "run", "start"]
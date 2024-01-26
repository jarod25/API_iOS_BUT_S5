FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Bundle app source
COPY . .

# Expose port
EXPOSE 80

# Start app
CMD [ "yarn", "start" ]

FROM node:10

WORKDIR /app

COPY ./package.json /app
RUN npm install

COPY . /app

CMD ["npm", "start"]


# FROM node:13
# # Create app directory
# WORKDIR /app
# # Copy package.json and package-lock.json using a wildcard
# COPY ./ ./
# # Install app dependencies
# RUN npm install
# # Bundle app source
# COPY . ./app
# EXPOSE 8082
# CMD ["npm", "run", "start"]


# FROM node:10

# # Create app directory
# WORKDIR /usr/src/app

# # Install app dependencies
# # A wildcard is used to ensure both package.json AND package-lock.json are copied
# # where available (npm@5+)
# COPY package*.json ./

# RUN npm install
# # If you are building your code for production
# # RUN npm ci --only=production

# # Bundle app source
# COPY . .

# EXPOSE 8080
# CMD [ "node", "app.js" ]
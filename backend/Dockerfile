FROM node:latest
WORKDIR /app
COPY package.json .
COPY ../frontend/dist/mesterember/ ./public
RUN npm i
CMD [ "npm", "start" ]

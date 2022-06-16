FROM node:latest
WORKDIR /app
COPY . .
COPY ../frontend/dist/mesterEmberFrontend/ ./public
RUN npm i
CMD [ "npm", "start" ]

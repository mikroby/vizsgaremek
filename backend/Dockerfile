FROM node:latest
WORKDIR /app
COPY . .
COPY ../frontend/dist/mesterember/ ./public
RUN npm i
CMD [ "npm", "start" ]

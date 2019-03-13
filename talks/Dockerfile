FROM node:10

WORKDIR app
COPY node-example /app

RUN npm install

RUN npm run build

CMD npm run serve
EXPOSE 8080

FROM node:9.2.0

RUN mkdir -p /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app

RUN npm install
EXPOSE 8000
RUN npm run dev

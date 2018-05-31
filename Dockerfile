FROM node:8

RUN mkdir /work
WORKDIR /work

COPY package.json /work
COPY package-lock.json /work

RUN npm install

VOLUME /work/test/reports
VOLUME /work/node_modules

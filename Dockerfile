FROM node:latest as build

RUN mkdir /app
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM python:latest as serve

WORKDIR /app
RUN python -m http.server -d dist

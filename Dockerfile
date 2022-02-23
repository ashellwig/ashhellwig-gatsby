FROM node:14 as build

RUN mkdir /app
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx as serve

EXPOSE 80
COPY --from=build /app/public /usr/share/nginx/html

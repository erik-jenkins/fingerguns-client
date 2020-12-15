FROM node:15 AS build-env
WORKDIR /app

COPY package*.json .
RUN yarn install

COPY . .
RUN yarn build

FROM nginx:1.19.5

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/proxy.conf /etc/nginx/proxy.conf

COPY --from=build-env /app/build /var/www/fingerguns
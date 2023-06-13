FROM node:14-alpine as build

WORKDIR  /app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build 

FROM nginx

COPY --from=build app/dist /usr/share/nginx/html

# RUN rm /etc/nginx/conf.d/default.conf

# COPY nginx/nginx.conf /etc/nginx/conf.d

CMD ["nginx", "-g", "daemon off;"]
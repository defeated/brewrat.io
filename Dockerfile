FROM node:12.16.1

RUN apt-get update -qq && apt-get install -y nano curl

RUN mkdir -p /app
WORKDIR /app

COPY . ./
RUN yarn

CMD ["yarn", "serve"]
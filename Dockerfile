FROM node:12.16.1

RUN apt-get update -qq && apt-get install -y nano curl

RUN mkdir -p /app
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn config set no-progress && \
    yarn global add @vue/cli @vue/cli-service-global && \
    yarn install --non-interactive

USER node

CMD ["yarn", "serve"]

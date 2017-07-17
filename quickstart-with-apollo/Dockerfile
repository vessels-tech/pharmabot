FROM mhart/alpine-node:8

ENV APP_DIR /usr/src/APP_DIR
RUN mkdir -p "$APP_DIR"
WORKDIR $APP_DIR

RUN apk -v --update add \
  bash \
  && \
  rm /var/cache/apk/*

COPY package.json ./
RUN npm install

COPY ./ ./

CMD ["npm", "start"]

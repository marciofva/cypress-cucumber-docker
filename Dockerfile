FROM cypress/base:12.1.0
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install --save-dev cypress
RUN $(npm bin)/cypress verify
RUN $(npm bin)/cypress run
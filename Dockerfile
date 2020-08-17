FROM keymetrics/pm2:12-alpine

MAINTAINER tiotobing <tio.tobing@narasi.tv>

ENV HOST 0.0.0.0

# Set working directory
WORKDIR /usr/app

# Bundle APP files
COPY ./package*.json ./

# Install dependencies
RUN npm install

# Add Test [Jest] 
#RUN npm test

# Copy all files
COPY ./ ./

# Build app
RUN npm run build

CMD ["pm2-runtime", "start", "ecosystem.config.js"]

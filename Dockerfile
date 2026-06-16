FROM node:16

WORKDIR /app

COPY . .

# Install server dependencies
WORKDIR /app/server
RUN npm install

# Install client dependencies
WORKDIR /app/client
RUN npm install
RUN npm run build

# Return to server
WORKDIR /app/server

EXPOSE 5000

CMD ["npm","start"]

FROM node:18-alpine
WORKDIR /app
ARG PORT
ARG OPENAI_API_KEY
ENV PORT=$PORT
ENV OPENAI_API_KEY=$OPENAI_API_KEY
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 81

CMD [ "node", "server.js" ]
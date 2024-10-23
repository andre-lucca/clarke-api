FROM node:18

WORKDIR /usr/src/api

COPY . .

RUN npm install

COPY .env.example .env

RUN npx prisma generate

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
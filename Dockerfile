FROM node

WORKDIR /developer/project_01

COPY . .

RUN npm ci

CMD ["npm","start"]
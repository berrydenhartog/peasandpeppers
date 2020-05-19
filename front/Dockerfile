from node:14.2.0-alpine3.11 as builder


RUN npm install -g @vue/cli

RUN adduser -D peasenpeppers

COPY app /home/peasenpeppers/app
RUN chown -R peasenpeppers:peasenpeppers /home/peasenpeppers/app

USER peasenpeppers

WORKDIR /home/peasenpeppers/app/
RUN npm install 
CMD [ "/usr/local/bin/npm","run","serve" ]


#from nginx:1.18.0-alpine as production
#COPY --from=builder /app/html/ /usr/share/nginx/html

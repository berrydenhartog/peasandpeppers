from node:14.2.0-alpine3.11 as builder

RUN apk --no-cache update && \
    apk --no-cache add python py-pip && \
    pip --no-cache-dir install awscli && \
    rm -rf /var/cache/apk/*

RUN npm install -g @vue/cli 

RUN adduser -D peasandpeppers

COPY app /home/peasandpeppers/app

WORKDIR /home/peasandpeppers/app/

# install dependencies
RUN npm install 

# build source
#RUN npm run build

# set permissions ot new user
#RUN chown -R peasandpeppers:peasandpeppers /home/peasandpeppers/app
#USER peasenpeppers

# run server
CMD [ "/usr/local/bin/npm","run","serve" ]


#from nginx:1.18.0-alpine as production
#COPY --from=builder /app/html/ /usr/share/nginx/html

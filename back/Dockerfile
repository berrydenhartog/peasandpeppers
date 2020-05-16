FROM python:3.8.2-alpine3.11

ENV FLASK_APP ezra.py
ENV FLASK_ENV production

COPY requirements.txt /tmp/requirements.txt
RUN pip install -r /tmp/requirements.txt

RUN adduser -D ezra
USER ezra

WORKDIR /home/ezra/

COPY aws .aws
COPY app app
COPY ezra.py config.py ./

# initialize database for dev and prod
RUN flask db init && flask db migrate && flask deploy
RUN cp data.sqlite data-dev.sqlite

# for now run flask development. later use nginx
EXPOSE 5000
ENTRYPOINT ["flask"]
CMD [ "run", "--host=0.0.0.0", "--reload" ]
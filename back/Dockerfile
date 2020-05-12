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

EXPOSE 5000
ENTRYPOINT ["flask"]
CMD [ "run", "--host=0.0.0.0", "--reload" ]
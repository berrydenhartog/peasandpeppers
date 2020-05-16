.DEFAULT_GOAL := run

build:
	docker-compose build
run: build
	docker-compose up



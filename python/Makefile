.PHONY: test coverage lint lint-fix

test:
	docker compose exec python python test_runner.py

coverage:
	docker compose exec python bash -c "coverage run test_runner.py && coverage html"

lint:
	docker compose exec python bash -c "find . -name '*.py' | xargs pylint --rcfile=.pylintrc"

lint-fix:
	docker compose exec python bash -c "find . -name '*.py' | xargs autopep8 --in-place --aggressive"
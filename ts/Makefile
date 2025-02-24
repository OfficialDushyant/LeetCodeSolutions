.PHONY: test coverage lint lint-fix
test:
	docker compose exec ts bash -c "yarn test"
coverage:
	docker compose exec ts bash -c "yarn test:coverage"
lint:			
	docker compose exec ts bash -c "yarn lint"
lint-fix:
	docker compose exec ts bash -c "yarn lint:fix"

.PHONY: test coverage lint lint-fix autoload
test:
	docker compose exec php bash -c "composer test"
coverage:
	docker compose exec php bash -c "composer test-coverage"
lint:			
	docker compose exec php bash -c "composer cs"
lint-fix:
	docker compose exec php bash -c "composer csf"
autoload:
	docker compose exec php bash -c "composer dump-autoload"

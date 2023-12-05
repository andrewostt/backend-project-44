install:
	npm ci
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
readline-sync:
	npm readline-sync --dry-run
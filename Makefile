install:
	npm ci
	chmod +x bin/brain-games.js
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
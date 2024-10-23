install:
	npm ci
	chmod +x bin/brain-games.js
	chmod +x bin/brain-even.js
brain-games:
	node bin/brain-games.js
brain-even:
	node bin/brain-even.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
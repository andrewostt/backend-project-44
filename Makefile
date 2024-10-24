install:
	npm ci
	chmod +x bin/brain-games.js
	chmod +x bin/brain-even.js
	chmod +x bin/brain-calc.js
brain-games:
	node bin/brain-games.js
brain-even:
	node bin/brain-even.js
brain-calc:
	node bin/brain-calc.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
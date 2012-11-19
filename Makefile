REPORTER ?= list

config:
	@alias buster=./node_modules/buster/bin/buster
	@alias grepjs='grep -Rin --color=always --include=\*.js'
	
test-server:
	@./node_modules/mocha/bin/mocha \
		--reporter ${REPORTER} \
		test/serverside.js test/sumtest.js
test-client:
	@./node_modules/mocha-phantomjs/bin/mocha-phantomjs \
		-R ${REPORTER} \
		http://localhost:3000/test
coverage:
	YOUR_LIBRARY_NAME_COV=1 \
	./node_modules/mocha/bin/mocha \
	-R html-cov \
	test/serverside.js \
	test/sumtest.js \
	> coverage.html
coverage-client:
	YOUR_LIBRARY_NAME_COV=1 \
	../mocha-phantomjs/bin/mocha-phantomjs \
	-R json-cov \
	http://localhost:3000/test | \
	node buildHTML.js \
	> coverage1.html

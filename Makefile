REPORTER ?= list

start-server:
	@node  app &

clean:
	@kill -9 `ps -ef|grep "node app"|grep -v grep | awk '{print $2}'` &

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


test-tour:
	./node_modules/mocha/bin/mocha \
	-R list \
	test/operator-test.js

test-tour-cov:
	jscoverage lib-tour lib-tour-cov
	YOUR_LIBRARY_NAME_COV=1 \
	./node_modules/mocha/bin/mocha \
	-R html-cov \
	test/factorial-test.js \
	> tour-coverage.html
	rm -Rf lib-tour-cov

test-tour-ex:
	./node_modules/mocha/bin/mocha \
	-R list \
	test/operator-ex-test.js

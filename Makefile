BIN = ./node_modules/.bin


start-server: stop-server
	PORT=4080 node app &

stop-server:
	-kill -9 `ps -ef|grep "node app"|grep -v grep | awk '{print $$2}'`

instr: clean-coverage
	$(BIN)/istanbul instrument --output lib-cov --no-compact --variable global.__coverage__ lib
	
test-server:
	YOUR_LIBRARY_NAME_COV=1 \
	$(BIN)/mocha \
	-R xunit-istanbul \
	test/*-server-test.js \
	test/*-common-test.js | \
	node genReportFiles.js \
	-p server
test-client:
	YOUR_LIBRARY_NAME_COV=1 \
	$(BIN)/mocha-phantomjs \
	-R xunit-istanbul \
	http://localhost:4080/test | \
	node genReportFiles.js \
	-p client

test: clean instr start-server test-server test-client
	node genLcovReport.js

clean-coverage:
	-rm -rf lib-cov

clean:
	-rm -rf lib-cov
	-rm -rf report
/**
 *  This program will extract xunit and istanbul cov json report from console output to files
 *  Usage:
 *  cat log.log | node genReportFiles.js --postfix client
 */

 var ISTANBUL = require('istanbul'),
 fs = require('fs'),

 Report = ISTANBUL.Report,
 Collector = ISTANBUL.Collector,
 postfix = "",
 args = [ ];

 process.argv.slice(2).forEach(function (arg) {
  switch (arg) {
    case '-p':
    case '--postfix':
    args.unshift('--postfix');
    break;
    default:
    args.push(arg);
    break;
  }
});

 if(args.shift()) {
  postfix = args.pop();
}

// Read string from stdin
var input = fs.readFileSync('/dev/stdin').toString();

// Regular expression for xunit xml and lcov report
var xunitXml = extractXunitXml(input), 
lcovInfo = extractLcovInfo(input),
listReport = extractListReport(input);

if(xunitXml) {
  genXunitReport(xunitXml, postfix);
} else {
  console.error("FAILED!!!!!!!! Extract the xunitxml.");
}
if(lcovInfo) {
  genLcovHTMLReport(lcovInfo, postfix);
} else {
  console.error("FAILED!!!!!!!! Extract the lcov info failed.");
}
if(listReport) {
  genListReport(listReport, postfix);
} else {
  console.error('FAILED!!!!!!!! Extract list report failed');
}
if(!xunitXml || !lcovInfo || !listReport) {
  console.error('FAILED!!!!!!!! Extract one of the test report failed.');
  console.log('The origin test report as following:');
  console.log(input);
}

function extractListReport(input) {
  var regex = /================================= list report ==================================\n([\s\S]+?)\n================================================================================/g
    //var regex = /===(.+?)===/g
    var m = regex.exec(input);
    if(m && m.length == 2) {
      return m[1];
    }
    return null;
  }

  function extractXunitXml(input) {
    var regex = /================================ xuint report ==================================\n([\s\S]*?)\n================================================================================/g
    //var regex = /===(.+?)===/g
    var m = regex.exec(input);
    if(m && m.length == 2) {
      return m[1];
    }
    return null;
  }

  function extractLcovInfo(input) {
    var regex = /============================ istanbul lcov report ==============================\n([\s\S]*?)\n================================================================================/g
    //var regex = /111(.+?)111/g
    var m = regex.exec(input);
    if(m && m.length == 2) {
      try {
        return JSON.parse(m[1]);
      } catch (err) {
        console.log('Parse the lcov JSON object failed');
      }
    }
    return null;

  }

/**
 * Generate xunit test report
 *
 * @param {} xunitxml
 * @param filePostfix
 * @public
 */
 function genXunitReport(xunit, filePostfix) {
  if(!fs.existsSync('./report')) {
    fs.mkdirSync('./report');
  }
  fs.writeFileSync('./report/unit' + (filePostfix ? ('-' + filePostfix) : '') + '.xml', xunit);
}

/**
 * Generate lcov html report
 *
 * @param {} cov
 * @param filePostfix
 * @public
 */
 function genLcovHTMLReport(cov, filePostfix) {

  var cov = cov || {},
  collector = new Collector();

  collector.add(cov);

  // Output the coverage summary first
  ['text-summary'].forEach(function(reporter) {
    Report.create(reporter).writeReport(collector, true);
  });

  // Write the istanbul cov json to file
  if(!fs.existsSync('./report')) {
    fs.mkdirSync('./report');
  }
  fs.writeFileSync('./report/cov' + (filePostfix ? ('-' + filePostfix) : '') + '.json', 
    JSON.stringify(cov));
}

/**
 * Generate List report and output the list report to console
 *
 * @param {} list
 * @param filePostfix
 * @public
 */
 function genListReport(list, filePostfix) {
  console.log(list);
  if(!fs.existsSync('./report')) {
    fs.mkdirSync('./report');
  }
  fs.writeFileSync('./report/result' + (filePostfix ? ('-' + filePostfix) : '') + '.log', list);
}
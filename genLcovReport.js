/**
 *  This program will merge cov.json file under report folder
 *  Then use the merged cov.json file to generate lcov.info file and lcov html report
 *  Usage:
 *  node genLcovReport.js
 */

 var ISTANBUL = require('istanbul'),
 fs = require('fs'),
 Report = ISTANBUL.Report,
 Collector = ISTANBUL.Collector,
 covReportFolder = './report/';

 genLcovReport();

 function genLcovReport() {
  if(!fs.existsSync(covReportFolder)) {
    throw new Error('Directory ' + fs.realpathSync(covReportFolder) + ' does NOT exist.');
  }

  var files = fs.readdirSync(covReportFolder),
  collector = new Collector(),
  ops = {'dir': covReportFolder};

  files.filter(function(file) {
    return (file.substr(-5) == '.json' && file.substr(0, 3) == 'cov'); 
  }).forEach(function(file) {
    console.log('Merge coverage from: ' + file);
    var t = fs.readFileSync(covReportFolder + file, 'utf-8');
    collector.add(JSON.parse(t));
  });

  ['lcov'].forEach(function(reporter) {
    Report.create(reporter, ops).writeReport(collector, true);
  });
}

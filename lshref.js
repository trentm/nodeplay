var Apricot = require("apricot").Apricot;
var log = console.log;


function lshref(url) {
    //log(url);
    Apricot.open(url, function(doc) {
        doc.find('a').each(function(elem) {log(elem.href)});
    });
}


//---- mainline

for (var i=2; i < process.argv.length; ++i) {
    lshref(process.argv[i]);
}

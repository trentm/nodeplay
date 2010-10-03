var Apricot = require("apricot").Apricot;
var log = console.log;

Apricot.open("http://code.activestate.com/", function(doc) {
    //log(doc);
    doc.find('a').each(function(elem) {log(elem.href)});
})
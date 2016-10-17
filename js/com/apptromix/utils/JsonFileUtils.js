"use strict";
/*
    camel case : fileToRead is exposed variable
    small case : filetoread is usage internal variables.
    class case : upper camelcase ReadJson as exposed outside.
    method case : camel case readFileJson.
*/
var fs = require("fs");
var JsonFileUtils = (function () {
    function JsonFileUtils(fileToRead) {
        this.filetoread = fileToRead;
    }
    JsonFileUtils.prototype.readFileJson = function () {
        var content = fs.readFileSync(this.filetoread);
        var jsonContent = JSON.parse(content);
        return jsonContent;
    };
    return JsonFileUtils;
}());
module.exports = JsonFileUtils;

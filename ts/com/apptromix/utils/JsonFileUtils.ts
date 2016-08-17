/*
    camel case : fileToRead is exposed variable
    small case : filetoread is usage internal variables.
    class case : upper camelcase ReadJson as exposed outside. 
    method case : camel case readFileJson.
*/
var fs = require("fs");

class JsonFileUtils {
    filetoread : string;
    constructor(fileToRead: string){
        this.filetoread = fileToRead;
    }
    readFileJson(){
        var content = fs.readFileSync(this.filetoread);
        var jsonContent = JSON.parse(content);
        return jsonContent;
    }
}

export = JsonFileUtils;
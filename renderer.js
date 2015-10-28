var fs = require('fs');

function mergeValues(values, content) {
    //cycle over the keys
    for(var key in values) {
        //replace all {{key}} with the values from values object
        content = content.replace("{{" + key + "}}", values[key]);
    }
    return content;
}

function view(templateName, values, response) {
    //Read from the template files
    var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"});
    //Insert values into the content
    fileContents = mergeValues(values, fileContents);
    //Write out the contents to the response
    response.write(fileContents);
}

module.exports.view = view;
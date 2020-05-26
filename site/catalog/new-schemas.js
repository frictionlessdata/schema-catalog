const fs = require('fs');
var os = require("os");
var obj = require('../json/catalog.json');

var i = obj.length;
var allTitles = [];
var allContents = [];

for (i in obj) {
	schema_title = obj[i].title; 	
	schema_title = schema_title.replace(/\s+/g, '-').toLowerCase();
	allTitles.push(schema_title)
}

for (i in obj) {
	schema_content = obj[i]; 	
	allContents.push(schema_content);
}

for (i in obj) { 
	const createDir = (dirPath) => {
		fs.mkdirSync(process.cwd() + dirPath, { recursive: true }, (error) => {
			if (error) {
				console.error('An error occured: ', error);
			} else {
				console.log('Your directory is made');
			}
		});
	}

	const createFile = (filePath, fileContent) => {
		// fs.appendFile(`../catalog/${allTitles[i]}/README.md`, fileContent, (error) => {
		// 	if (error) {
		// 		console.error('An error occured: ', error);
		// 	} else {
		// 		console.log('Your file is made');
		// 	}
		// });
		var logStream = fs.createWriteStream(`./${allTitles[i]}/README.md`, {flags: 'w'});
		logStream.write(`---` + os.EOL + `title: ${obj[i].title}` + os.EOL + `name: ${obj[i].name}` + os.EOL + `description: ${obj[i].description}` + os.EOL + `country: ${obj[i].country}` + os.EOL + `repoUrl: "${obj[i].repoUrl}"` + os.EOL + `docsUrl: "${obj[i].docsUrl}"` + os.EOL + `---` + os.EOL + os.EOL + `<Schema />`);
		logStream.end(``);
	}

	const path = `/${allTitles[i]}`;
	const content = `${allContents[i]}`

	createDir(path)
	createFile(path, content);
}


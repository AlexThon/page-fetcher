
// Install and use the request library to make the HTTP request -- done
// Use Node's fs (file system) module to write the file -- done
// Use the callback based approach we've been learning so far
// arg1: URL
// It should take two command line arguments:
// arg2: local file path



const request = require('request');
const fs = require('fs');
//const url = 'http://www.example.edu/';

const saveFile = (url, localPath) => {
  request(url, (error, response, body) => {
    if (error) return false;
    else {  // reach here when no error
      fs.writeFile(localPath, body, err => {
        if (err) {
          console.error(err);
          return;
        } else {
          console.log(
            `Downloaded and saved ${body.length} bytes to ${localPath}`);
        } // close inner else
      });
    } // close inner else
  });

}; // close saveFile

let ls = process.argv;
let url = ls[2];
let localPath = ls[3];
saveFile(url, localPath);



    

    

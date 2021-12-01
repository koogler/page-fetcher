const fs = require('fs')
const URL = process.argv[2]
const localPath = process.argv[3]
const request = require('request');

request(URL, (error, response, body) => {
  fs.writeFile(localPath, body, (err) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`)
  });
})

const http = require('http');

const data = JSON.stringify({
  filePath: 'projects/migration-49/Controllers/DeprecatedController.cs',
  targetContent: 'public IActionResult FetchData()',
  replacementContent: 'public async Task<IActionResult> FetchData()'
});

const options = {
  hostname: 'localhost',
  port: 5153,
  path: '/api/files/replace',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(options, (res) => {
  let responseBody = '';
  res.on('data', (chunk) => {
    responseBody += chunk;
  });
  res.on('end', () => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`BODY: ${responseBody}`);
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

req.write(data);
req.end();

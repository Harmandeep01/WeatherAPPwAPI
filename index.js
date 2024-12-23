const http = require('http');
const fs = require('fs');
const requests = require('requests');

const homeFile = fs.readFileSync('index.html', 'utf-8');

// Replace placeholders with actual weather data
const replaceVal = (tempVal, orgVal) => {
    let placeholderVal = tempVal.replace("{%temp%}", orgVal.main.temp)
        .replace("{%tempMin%}", orgVal.main.temp_min)
        .replace("{%tempMax%}", orgVal.main.temp_max)
        .replace("{%location%}", orgVal.name)
        .replace("{%country%}", orgVal.sys.country)
        .replace("{%weathertype%}", orgVal.weather[0].main);
    return placeholderVal;
};

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        requests('https://api.openweathermap.org/data/2.5/weather?q={your_city}&appid={your_API}&units=metric')
            .on('data', (chunk) => {
                const parsedData = JSON.parse(chunk);
                const arrData = [parsedData];
                const realTimeData = arrData.map((val) => replaceVal(homeFile, val)).join("");
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(realTimeData);
            })
            .on('end', (err) => {
                if (err) console.log('Connection closed due to errors', err);
                res.end(); // End the response
            });
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 Not Found</h1>");
    }
});

// Start the server
server.listen(8000, '127.0.0.1', () => {
    console.log('Server started at http://127.0.0.1:8000');
});

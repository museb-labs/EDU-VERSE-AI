const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(`
        <h1>EduVerse AI</h1>
        <p>Node.js server is running successfully!</p>
    `);
});

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`Node.js server running at http://localhost:${PORT}`);
});

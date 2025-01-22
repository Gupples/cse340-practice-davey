// Import express using ESM syntax
import express from "express";
import { fileURLToPath } from "url";
import path from "path";

// Create __dirname and __filename variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define important variables
const MODE = process.env.MODE || 'production';
const PORT = process.env.PORT || 3000;

// Create an instance of an Express application
const app = express();

// Set view engine to ejs
app.set('view engine', 'ejs');

// Set the views directory (where your templates are stored)
app.set('views', path.join(__dirname, 'views'));

// When in development mode, start a WebSocket server for live reloading
if (MODE.includes('dev')) {
    const ws = await import('ws');

    try {
        const wsPort = parseInt(PORT) + 1;
        const wsServer = new ws.WebSocketServer({port: wsPort });

        wsServer.on('listening', () => {
            console.log(`WebSocket server is running on port ${wsPort}`);
        });

        wsServer.on('error', () => {
            console.error('WebSocket server error:', error);
        });
    } catch (error) {
        console.error('Failed to start WebSocket server', error);
    }
}

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Create static file paths
// Home page
app.get("/", (req, res) => {
    const title = 'Home Page';
    const content = '<h1>Welcome to the Home Page</h1>';
    const mode = process.env.MODE;
    const port = process.env.PORT;
    res.render('index', { title, content, mode, port });
});

// About page
app.get("/about", (req, res) => {
    const title = 'Page 1';
    const content = '<h1>Page 1</h1>';
    const mode = process.env.MODE;
    const port = process.env.PORT;
    res.render('index', { title, content, mode, port });
});

// Contact page
app.get("/contact", (req, res) => {
    const title = 'Page 2';
    const content = '<h1>Page 2</h1>';
    const mode = process.env.MODE;
    const port = process.env.PORT;
    res.render('index', { title, content, mode, port });
});

app.get("/hello", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/hello.ejs"))
});

// Account page
app.get('/explore/:name/:age/:id', (req, res) => {
    const { name, age, id } = req.params;
    const content = `
        <h1>Hello, <%- name%>! Welcome to the site!</h1>
        <p>Your age is: <%- age%><br>
        Your id is: <%- id%></p>
    `;
    res.render('index', {title, content, mode, port });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
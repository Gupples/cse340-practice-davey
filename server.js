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

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Create static file paths
app.get("/", (req, res) => {
    const title = 'Home Page';
    const content = '<h1>Welcome to the Home Page</h1>';
    res.render('index', { title, content });
});

app.get("/page1", (req, res) => {
    const title = 'Page 1';
    const content = '<h1>Page 1</h1>';
    res.render('index', { title, content });
});

app.get("/page2", (req, res) => {
    const title = 'Page 2';
    const content = '<h1>Page 2</h1>';
    res.render('index', { title, content });
});

app.get("/hello", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/hello.ejs"))
});

// Account page
app.get('/explore/:name/:age/:id', (req, res) => {
    const { name, age, id } = req.params;
    res.send('Check your computer console!');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
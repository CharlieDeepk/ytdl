const express = require('express');
const path = require('path');
//const cors = require('cors');
const ytdl = require('ytdl-core');

const app = express();

const port = process.env.port || 3000

//definitions of paths for express config
const publicDirectory = path.join(__dirname, '../public');

//setup static directory to serve
app.use(express.static(publicDirectory));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/download', (req, res) => {
    const url = req.query.url;
    res.header("Content-Disposition", 'attachment;  filename="Video.mp4');
    res.header()
    ytdl(url, {format: 'mp4'}).pipe(res);
});

app.listen(port, () => {
    console.log('server is setup on 3000');
});
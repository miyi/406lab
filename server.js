import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

const app = express();
const PORT = process.env.PORT || 1212;

app.use(express.static(path.join(__dirname, 'public'), {index: false}));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

function renderPage(appHtml) {
  return `
		<!doctype html>
		<html lang="en">
		  <head>
		    <meta charset="utf-8">
		    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		    <meta name="theme-color" content="#000000">
		    <link rel="manifest" href="/manifest.json">
		    <link rel="shortcut icon" href="/favicon.ico">
		    <script async src="/bundle.js"></script> 
		    <title>React App</title>
		  </head>
		  <body>
		    <noscript>
		      You need to enable JavaScript to run this app.
		    </noscript>
		    <div id="root"></div>
		  </body>
		</html>
   `
};

app.listen(PORT, function() {
    console.log('Node app is running on port: ' + PORT);
});
const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
	response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
	response.end(`<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>Localhost Test</title>
		<style>
			* { box-sizing: border-box; }
			body {
				min-height: 100vh;
				margin: 0;
				display: grid;
				place-items: center;
				background: #f1f5f9;
				color: #0f172a;
				font: 16px/1.5 system-ui, sans-serif;
			}
			main {
				width: min(90%, 480px);
				padding: 2.5rem;
				border-radius: 16px;
				background: white;
				box-shadow: 0 12px 32px #0f172a14;
				text-align: center;
			}
			.status { color: #15803d; font-weight: 600; }
			button {
				margin-top: 1rem;
				padding: 0.7rem 1rem;
				border: 0;
				border-radius: 8px;
				background: #2563eb;
				color: white;
				font: inherit;
				cursor: pointer;
			}
			button:hover { background: #1d4ed8; }
		</style>
	</head>
	<body>
		<main>
			<h1>It works!</h1>
			<p class="status">Your localhost server is running.</p>
			<p>This simple page confirms the app is responding.</p>
			<button type="button" onclick="document.querySelector('#result').textContent = 'Button test passed!'">Test button</button>
			<p id="result" aria-live="polite"></p>
		</main>
	</body>
</html>`);
});

server.listen(port, () => {
	console.log(`Test homepage available at http://localhost:${port}`);
});

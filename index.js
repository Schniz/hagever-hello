const http = require('http');
const port = process.env.PORT || 5000;

const redirectTo = url => (req, res) => {
  console.log(`got request`, req.headers);
  res.writeHead(302, { Location: url });
  res.end();
};

const server = http.createServer(
  redirectTo('https://gal.hagever.com/')
);

server.listen(port, () => {
	const { address, port } = server.address();
	console.log(`listening on ${address}:${port}`);
});

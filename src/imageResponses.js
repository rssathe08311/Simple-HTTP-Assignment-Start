const fs = require('fs');

const spongegarImage = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getDankMemes = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.end(spongegarImage);
};

module.exports.getDankMemes = getDankMemes;

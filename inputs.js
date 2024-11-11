const fs = require('fs');

const arguments = function () {
  try {
    const args = fs.readFileSync('./input.txt', 'utf8') ?? '';
    return args.split(/\s+/);
  } catch (err) {
    console.error(err);
    return null;
  }
}();

module.exports = arguments;
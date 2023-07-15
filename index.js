const fs = require("fs");

const logger = (req, res, next) => {
  const currentTime = new Date();
  const formattedDate = `${currentTime.getDate()}-${currentTime.getMonth() + 1}-${currentTime.getFullYear()} ${currentTime.getHours()}:${currentTime.getMinutes()} ${currentTime.getHours() >= 12 ? 'PM' : 'AM'}`;

  const currentReq = {
    url: req.url,
    method: req.method,
    time: formattedDate,
  };

  fs.appendFile('log.txt', JSON.stringify(currentReq), (err) => {
    if (err) {
      console.error(err);
    }
  });
  next();
};

module.exports = { logger };

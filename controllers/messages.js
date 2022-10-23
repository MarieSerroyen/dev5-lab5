const getAll = (req, res) => {
  const response = {
    status: 'success',
    message: "GETTING messages",
    data: {
      messages: [
        {
          "user": "Marie",
          "message": "Hello there!"
        }
      ]
    }
  };
  res.json(response);
}

const getId = (req, res) => {
  const response = {
    status: 'success',
    message: "GETTING message 1",
    data: {
      messages: [
        {
          "user": "Marie",
          "message": "Hello there!"
        }
      ]
    }
  };
  res.json(response);
}

module.exports.getAll = getAll;
module.exports.getId = getId;
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

module.exports.getAll = getAll;
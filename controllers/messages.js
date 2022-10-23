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
};

const getId = (req, res) => {
  const id = req.params.id;

  const response = {
    status: 'success',
    message: `GETTING message with id: ${id}`,
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
};

const create = (req, res) => {
  const response = {
    status: 'success',
    message: "POSTING a new message for user Marie",
    data: {
      messages: [
        {
          "user": "Marie",
          "message": "Look at me!!!"
        }
      ]
    }
  };
  res.json(response);
};

module.exports.getAll = getAll;
module.exports.getId = getId;
module.exports.create = create;
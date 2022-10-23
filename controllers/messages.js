const getAll = (req, res) => {
  if(req.query.user) {
    const user = req.query.user;

    const response = {
      status: 'success',
      message: `GETTING messages for user: ${user}`,
      data: {
        messages: [
          {
            "user": user,
            "message": "What a nice message!"
          }
        ]
      }
    };
    res.json(response);
  };

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

const update = (req, res) => {
  const id = req.params.id;

  const response = {
    status: 'success',
    message: `UPDATING message with id: ${id}`,
    data: {
      messages: [
        {
          "user": "Marie",
          "message": "This is so much fun!"
        }
      ]
    }
  };
  res.json(response);
};

const deleteMessage = (req, res) => {
  const id = req.params.id;

  const response = {
    status: 'success',
    message: `DELETING message with id: ${id}`,
    data: {
      messages: [
        {
          "user": "Marie",
          "message": "This is so much fun!"
        }
      ]
    }
  };
  res.json(response);
};

module.exports.getAll = getAll;
module.exports.getId = getId;
module.exports.create = create;
module.exports.update = update;
module.exports.delete = deleteMessage;
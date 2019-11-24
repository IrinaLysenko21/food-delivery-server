const Comment = require('../comment_schema');

const createComment = async (request, response) => {
  try {
    const newComment = new Comment(request.body);
    const comment = await newComment.save();

    response.status(201).json({ status: "success", comment });
  } catch (err) {
    response.status(404).json({ status: "error", message: err.message });
  }
};

module.exports = createComment;
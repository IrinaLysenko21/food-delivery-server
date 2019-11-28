const Comment = require('../comment_schema');

const getComments = async (request, response) => {
  try {
    const productStr = Object.values(request.query)[0];
    const product = productStr.slice(1, productStr.length - 1);

    const comments = await Comment.find({ product });

    response.status(200).json({ status: 'success', comments });
  } catch (err) {
    response.status(404).json({ status: "error", message: err.message });
  }
};

module.exports = getComments;
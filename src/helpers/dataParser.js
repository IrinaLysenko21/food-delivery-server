const getData = data => {
  try {
    const allProducts = JSON.parse(data);

    return allProducts;
  } catch (err) {
    console.error('Get state error: ', err);
  }
};

module.exports = getData;
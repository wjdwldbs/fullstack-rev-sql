// complete and fix the dbhelpers
const db = require('./index.js');

const getProductsHelper = (callback) => {
  const q = `SELECT * FROM products;`;
  db.query(q, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  })
}

const postProductsHelper = (product, callback) => {
  const q = `INSERT INTO products (item, min_cost, curr_bid, ends_in, img) VALUES ("${product.item}", ${product.min_cost}, ${product.curr_bid}, ${product.ends_in}, "${product.img}");`;
  db.query(q, (err, results) => {
    if (err){
      callback(err);
    } else {
      callback(null);
    }
  })
}

const updateProductHelper = (product, index, callback) => {
  const q = `UPDATE products SET item="${product.item}", min_cost=${product.min_cost}, curr_bid=${product.curr_bid}, ends_in=${product.ends_in}, img="${product.img}" WHERE id=${index};`;
  db.query(q, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null)
    }
  })
}

const deleteProductHelper = () => {

}

module.exports = {
  getProductsHelper: getProductsHelper,
  postProductsHelper: postProductsHelper,
  updateProductHelper: updateProductHelper,
  deleteProductHelper: deleteProductHelper
}
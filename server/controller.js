// Controller here
// complete building out the controller
const helpers = require('../db/dbhelpers.js');

const controller = {
  get: (req, res) => {
    helpers.getProductsHelper((err, results) => {
      if (err){
        res.status(404).send(`Data GET request was unsuccessful`);
      } else {
        res.status(200).send(results);
      }
    })
  },
  post: ({body}, res) => {
    helpers.postProductsHelper(body, (err, results) => {
      if(err){
        res.status(400).send(`Data POST request was unsucessful, ${err}`);
      } else {
        res.status(200).send(`Data POST request was successful!!`)
      }
    })
    
  },
  put: ({body, params}, res) => {
    helpers.updateProductHelper(body, params._id, (err, results) => {
      if (err) {
        res.status(400).send(`Data UPDATE request was unsucessful, ${err}`);
      } else {
        res.status(200).send('Data UPDATE request was successful!!');
      }
    })
    
  },
  delete: (req, res) => {
    res.status(200).send('DELETE SUCCESS!');
  }
}

module.exports = controller
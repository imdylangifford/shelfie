module.exports = {
    getAll: ( req, res) => {
      const dbInstance = req.app.get('db');
      dbInstance.get_products()
      .then((products) => res.status(200).send(products))
    },
    addProduct: (req, res) => {
      const dbInstance = req.app.get('db');
      const {productname, productprice, imageurl } = req.body
      dbInstance.add_product([productname, productprice, imageurl])
      .then(() => res.sendStatus(200))
    },
    deleteProduct: ( req, res) => {
      const dbInstance = req.app.get('db');
      const { params } = req
      console.log(params)
      dbInstance.delete_product([params.id])
      .then( () => res.sendStatus(200))
    }
  };
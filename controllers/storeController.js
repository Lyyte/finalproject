const db = require("../models");
const braintree = require('braintree');
require('dotenv').config();
const { Order } = require('../models/order');
const { errorHandler } = require('./dberrhandler');



const gateway = braintree.connect({
  environment: braintree.Environment.Sandbox, // Production
  merchantId: process.env.BRAINTREE_MERCHANT_ID,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY
});

// Defining methods for the ItemsController
module.exports = {
  userById: function(req, res, next, id) {
    db.User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        req.profile = user;
        next();
    });
},
  findAll: function(req, res) {
    db.Item
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  list: function(req, res) {
    let order = req.query.order ? req.query.order : 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    let limit = req.query.limit ? parseInt(req.query.limit) : 6;
    db.Item
    .find()
        .sort([[sortBy, order]])
        .limit(limit)
        .exec((err, products) => {
            if (err) {
                return res.status(400).json({
                    error: 'Products not found'
                });
            }
            res.json(products);
        });
  },
  listCategories: function(req, res){
    db.Item
    .distinct('category', {}, (err, categories) => {
      if (err) {
          return res.status(400).json({
              error: 'Categories not found'
          });
      }
      res.json(categories);
  });
  },
  findById: function(req, res) {
    db.Item
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByCategory: function(req, res) {
    db.Item
    .find(req.query.category)
    .sort({})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Item
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Item
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Item
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  generateToken: function(req, res) {
    gateway.clientToken.generate({}, function(err, response) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(response);
        }
    });
  },
  processPayment: function(req, res) {
    let nonceFromTheClient = req.body.paymentMethodNonce;
    let amountFromTheClient = req.body.amount;
    // charge
    let newTransaction = gateway.transaction.sale(
        {
            amount: amountFromTheClient,
            paymentMethodNonce: nonceFromTheClient,
            options: {
                submitForSettlement: true
            }
        },
        (error, result) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.json(result);
            }
        }
    );
  },
  getStatusValues: function(req, res) {
    res.json(Order.schema.path('status').enumValues);
},
updateOrderStatus: function(req, res) {
  Order.update({ _id: req.body.orderId }, { $set: { status: req.body.status } }, (err, order) => {
      if (err) {
          return res.status(400).json({
              error: errorHandler(err)
          });
      }
      res.json(order);
  });
},
listOrders: function(req, res) {
  Order.find()
      .populate('user', '_id name address')
      .sort('-created')
      .exec((err, orders) => {
          if (err) {
              return res.status(400).json({
                  error: errorHandler(error)
              });
          }
          res.json(orders);
      });
},
decreaseQuantity: function(req, res, next) {
  let bulkOps = req.body.order.products.map(item => {
      return {
          updateOne: {
              filter: { _id: item._id },
              update: { $inc: { quantity: -item.count, sold: +item.count } }
          }
      };
  });
},
createorder: function(req, res) {
  console.log('CREATE ORDER: ', req.body);
  req.body.order.user = req.profile;
  const order = new Order(req.body.order);
  order.save((error, data) => {
      if (error) {
          return res.status(400).json({
              error: errorHandler(error)
          });
      }
      res.json(data);
  });
},
}

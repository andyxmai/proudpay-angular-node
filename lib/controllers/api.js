'use strict';

var url = require('url');
var braintree = require("braintree");
var gateway = braintree.connect({
    environment:  braintree.Environment.Production,
    merchantId:   'sgy5fmkkbp6cw9vf',
    publicKey:    'm8wkrtthtth9pbxj',
    privateKey:   'be752af645ce005b989b886339066d2c'
});
/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  res.json([
    {
      name : 'Mobile',
      info : 'Pay any merchant without taking out your wallet, signing receipts, or counting coins.',
      awesomeness: 10
    }, {
      name : 'Fast',
      info : 'No one likes ot wait, pay for anything in seconds!',
      awesomeness: 10
    }, {
      name : 'Rewarding',
      info : 'Earn rewards and loyalty points across merchants each time you spend.',
      awesomeness: 10
    }
  ]);
};

exports.merchants = function(req, res) {
  res.json([
    {
      name      : 'Ray\'s Grill',
      imageUrl  : 'https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-9/579812_351900448235695_590534650_n.jpg?oh=aa98e8efd427bc115fbf2dd084dc2293&oe=545932D8&__gda__=1413843952_67f3a48e33457fa3241141fbc2ffe59a',
    },
    {
      name      : 'CoHo',
      imageUrl  : 'https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-9/19270_290256725839_5452040_n.jpg?oh=c73b66d9ccedec32d67767227c14b3b5&oe=5459E50C&__gda__=1413153426_e798f4307ced8c71f45fdf87c6282cdf',
    },
    {
      name      : 'Treehouse',
      imageUrl  : 'https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-9/551786_10151014196393021_986616577_n.jpg?oh=1e298c375ebdec392f2293b6ca35274b&oe=543EEC05&__gda__=1413648342_e0b96ca3a131342fc560491e384e3c0e',
    }
  ]);
};

exports.getPaymentCards = function(req, res) {
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  gateway.customer.find(query.customer_id, function (err, customer) {
    res.send(customer.creditCards);
  });
};
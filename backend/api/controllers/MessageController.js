/**
 * MessageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const random = require('lodash').random;

module.exports = {
  chat: function (req, res) {
    const updatedData = [
      {
        title: 'Current Value',
        value: random(90, 120) / 10,
        unit: 'BTC',
        pairValue: random(97890, 99890),
        pairUnit: 'USD',
      },
      {
        title: 'Buy In',
        value: random(10, 30) / 10,
        unit: 'BTC',
        pairValue: random(9000, 11000),
        pairUnit: 'USD',
      },
    ]
    sails.sockets.blast('socket.market.data.update', { data: updatedData }, req);
    return res.send('New data updated '.concat(JSON.stringify(updatedData, null, 2)));
  }

};


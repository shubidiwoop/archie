'use strict';
module.exports = function(app) {
  var ngoUsers = require('../controller/NGOcontroller');

  // ngo Tax Contract Routes
  app.route('/ngo/createUser')
    .post(ngoUsers.create_user);

  app.route('/ngo/createngo')
    .post(ngoUsers.create_ngo);

  app.route('/erc20/mint')
    .post(ngoUsers.mint);

  app.route('/ngo/revokeUser')
    .post(ngoUsers.revoke_user);

  app.route('/ngo/donate')
    .post(ngoUsers.donate);
  
  app.route('/ngo/revokengo')
    .post(ngoUsers.revoke_ngo);

  // ERC20Mintable contract Routes
  app.route('/erc20/balanceOf')
    .post(ngoUsers.balanceOf);

};
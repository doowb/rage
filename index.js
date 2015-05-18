/*!
 * rage <https://github.com/doowb/rage>
 *
 * Copyright (c) 2015, Brian Woodward.
 * Licensed under the MIT License.
 */

'use strict';

/**
 * Add a `.rage` method to your `console`.
 * Based on this tweet: https://twitter.com/dmosher/status/598172559650082816
 *
 * ```
 * require('rage')(console);
 * console.rage('ARGGGH');
 * ```
 * @name  rage
 * @param  {Object} `cons` console object
 * @api public
 */

module.exports = function (cons) {
  var chalk = require('chalk');
  cons.rage = function(m) {
    cons.log(chalk.bgRed('(╯°□°）╯︵ ┻━┻  ' + m));
  };
};

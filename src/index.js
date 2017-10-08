/* eslint consistent-this: off */
/* eslint no-invalid-this: off */
/* eslint no-param-reassign: off */

'use strict'

/**
 * @type {Object}
 */
var Logger = console;

/**
 * @param {Object|undefined} CustomLogger
 *
 * @returns {undefined}
 */
function openEvent(CustomLogger) {
  var db = this;

  if ( CustomLogger ) {
    Logger = CustomLogger;
  }

  if ( db.base.options.debug ) {
    Logger.log( '[debug]', new Date(), 'open mongodb://%host:%port/%database'
      .replace( '%host', db.host )
      .replace( '%port', db.port )
      .replace( '%database', db.name )
    );
  }
}

module.exports = openEvent;

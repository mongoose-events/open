/* eslint prefer-rest-params: off */

'use strict';

var open = require( '../src/index' )
var db = require( './fixture/db' )
var sinon = require( 'sinon' )
var spy = sinon.spy( console, 'log' )
var tap = require( 'tap' )

tap.test( 'openEvent without debug output',
  function ( t ) {
    var openEvent

    db.base.options.debug = false
    openEvent = open.bind( db )
    openEvent()

    t.same( spy.notCalled, true, 'should not output a console.log message' )
    t.end()
  }
)

tap.test( 'openEvent with debug output',
  function ( t ) {
    var openEvent

    db.base.options.debug = true
    openEvent = open.bind( db )
    openEvent()

    t.same(
      spy.calledWith(
        '[debug]',
        spy.getCall( 0 ).args[ 1 ],
        'open mongodb://localhost:27017/mydb'
      ),
      true,
      'should output a console.log message'
    )

    t.end()
  }
)

tap.test( 'openEvent with custom logger',
  function ( t ) {
    var openEvent

    var logger = {
      log: function () {
        var args = Array.from( arguments );

        console.log( args.join( ' ' ) )
      }
    }

    db.base.options.debug = true
    openEvent = open.bind( db, logger )
    openEvent()

    t.same(
      spy.calledWith(
        '[debug]',
        spy.getCall( 0 ).args[ 1 ],
        'open mongodb://localhost:27017/mydb'
      ),
      true,
      'should output a console.log message using a custom logger'
    )

    t.end()
  }
)

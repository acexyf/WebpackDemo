'use strict';

import utils from 'utils';
import bind from 'helpers/bind';
import Axios from 'core/Axios';
import mergeConfig from 'core/mergeConfig';
import defaults from './defaults';
// var moemnt = require('moment')
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context, null);

  return instance;
}

// Create the default instance to be exported
var axios:any = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
import Cancel from 'cancel/Cancel'
import CancelToken from 'cancel/CancelToken'
import isCancel from 'cancel/isCancel'
axios.Cancel = Cancel;
axios.CancelToken = CancelToken;
axios.isCancel = isCancel;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
import spread from 'helpers/spread'
axios.spread = spread;


export default axios
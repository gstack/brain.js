"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activate = activate;
exports.measure = measure;
/**
 * Leaky Relu Activation, aka Leaky Rectified Linear Unit Activation
 * @description https://en.wikipedia.org/wiki/Rectifier_(neural_networks)
 * @param weight
 * @returns {number}
 */
function activate(weight) {
  return weight > 0 ? weight : 0.01 * weight;
}

/**
 * Leaky Relu derivative
 * @param weight
 * @param delta
 * @returns {number}
 */
function measure(weight, error) {
  return weight > 0 ? error : 0.01 * error;
}
//# sourceMappingURL=leaky-relu.js.map
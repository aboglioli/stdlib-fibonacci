/* Import dependencies, declare constants */

/**
* Your function call
* @param {Object} params Execution parameters
*   Members
*   - {Array} args Arguments passed to function
*   - {Object} kwargs Keyword arguments (key-value pairs) passed to function
*   - {String} remoteAddress The IPv4 or IPv6 address of the caller
*
* @param {Function} callback Execute this to end the function call
*   Arguments
*   - {Error} error The error to show if function fails
*   - {Any} returnValue JSON serializable (or Buffer) return value
*/

// Fibonacci function using memoization
function fibonacci(num, memo = {}) {
  if (memo[num]) return memo[num];
  if (num <= 1) return num;

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}

module.exports = (params, callback) => {
  const res = fibonacci(params.args[0]);

  callback(null, res);
};

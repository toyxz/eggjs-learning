// exports.keys = 'egg-fw-starter';

// module.exports = {
//     "config": {
//         "keys": "heheda",
//     }
// }

module.exports = appInfo => {
    const config = exports = {};
    config.keys = appInfo.name + '_1583142601162_8887';
  
    return {
      ...config,
    };
  };

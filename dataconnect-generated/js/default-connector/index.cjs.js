const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'illya-web-dev',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;


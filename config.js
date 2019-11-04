var host = 'ltapp.azhiye.com';
var config = {
  service: {
    host,
    loginUrl: `https://${host}/login`,
    requestUrl: `https://${host}/user`,
    tunnelUrl: `https://${host}/tunnel`,
    secretUrl: `https://${host}/secret`,
    uploadUrl: `https://${host}/upload`
  }
};

module.exports = config;
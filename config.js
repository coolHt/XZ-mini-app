var host = 'ltapp.azhiye.com';
var config = {
  service: {
    host,
    loginUrl: `https://${host}/Login`,
    requestUrl: `https://${host}/Psninfo`,
    tunnelUrl: `https://${host}/tunnel`,
    secretUrl: `https://${host}/secret`,
    uploadUrl: `https://${host}/EntBin`
  }
};

module.exports = config;
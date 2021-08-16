'use strict';

module.exports.route = (req, res) => {
  const paths = ["/sdk-callback/*"]
  const details = global.config.iosAppIds.map(id => {
    return {
      appID: id,
      paths: paths
    }
  });
  details.unshift({
    appIDs: global.config.iosAppIds,
    components: [
      {
        '/': '/sdk-callback/*'
      }
    ]
  });
  const payload = {
    applinks: {
      apps: [],
      details: details
    }
  };
  res.status(200).send(payload).end();
}

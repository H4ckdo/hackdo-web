const webpush = require('web-push');
const environment = process.env.NODE_ENV;
const { SECRET_PUSH_KEY } = process.env.NODE_ENV === "production" ? require('../../config/env/production.js') : require('../../config/env/development.js');
const publicServerKey = "BPlXiFG6NINNh-j7Tqhcgd2xMXYDM9_r1Wuuhbe4KB3TrCwaXQjXsdnCD_iOlh6tGF8Hyz86TMtzNxL2DJpA-Mc"
webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  "BPlXiFG6NINNh-j7Tqhcgd2xMXYDM9_r1Wuuhbe4KB3TrCwaXQjXsdnCD_iOlh6tGF8Hyz86TMtzNxL2DJpA-Mc",
  SECRET_PUSH_KEY
)


/**
 * @class RootController
 * @param  {type} req {description}
 * @param  {type} res {description}
 * @return {type} {description}
 */
class RootController {
  main(req, res) {
    res.render('index', { environment, publicServerKey })
  }

  suscribe(req, res) {
    let subscription = req.body;
    debugger;
    const notification = JSON.stringify({
      title: 'Notificacion de prueba',
      body: 'Test'
    });

    webpush.sendNotification(subscription, notification)
      .then(data => res.json(data))
      .catch(error => res.json(error));
  }
}

module.exports = RootController;


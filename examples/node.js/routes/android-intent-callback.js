'use strict';

const { Joi } = require('celebrate');

module.exports.schema = Joi.object().keys({
    package: Joi.string().required()
}).unknown(true);

module.exports.route = (req, res) => {
    // Start activity with action com.swedbankpay.mobilesdk.VIEW_PAYMENTORDER
    // in the given package, with the same url as was used for this
    // request. This makes it so that we only ever need to compare
    // against paymentUrl in the SDK, and not do any further
    // interpretations of the url there.
    const intentUrl = `intent://${req.headers.host}${req.originalUrl}#Intent;scheme=${req.protocol};action=com.swedbankpay.mobilesdk.VIEW_PAYMENTORDER;package=${encodeURIComponent(req.query.package)};end;`;
    res.status(301).set('Location', intentUrl).send().end();
};
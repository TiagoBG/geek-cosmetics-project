const moment = require('moment-timezone');

exports.generateTimestampUnix = async () => {
    let timestamp = await moment.tz("America/Bogota").unix();
    return parseInt(timestamp);
}
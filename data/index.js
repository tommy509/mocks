const labels = require('./label');
const simDetails = require('./simDetail');
const simChangeStatus = require('./simChangeStatus');
const simLastSessionDetails = require('./simLastSessionDetails');
const simFinishSleep = require('./simFinishSleepData');
const simFinishTests = require('./simFinishTestsData');
const simActivate = require('./simActivateData');
const simInstallationAddress = require('./simInstallationAddress');
const smsSend = require('./smsSend');
const smsList = require('./smsList');

const models = {

    simDetail: simDetails,
    simChangeStatus: simChangeStatus,
    label: labels,
    simLastSessionDetails: simLastSessionDetails,
    simFinishSleep,
    simFinishTests,
    simActivate,
    simInstallationAddress,
    smsSend,
    smsList,

};
module.exports = models;
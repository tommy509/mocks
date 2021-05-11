const labels = require('./label');
const simDetails = require('./simDetail');
const simChangeStatus = require('./simChangeStatus');
const simSessionDetails = require('./simSessionDetails');
const simFinishSleep = require('./simFinishSleepData');
const simFinishTests = require('./simFinishTestsData');
const simActivate = require('./simActivateData');
const simInstallationAddress = require('./simInstallationAddress');
const smsSend = require('./smsSend');
const smsList = require('./smsList');
const customerList = require('./customerList')

const models = {

    simDetail: simDetails,
    simChangeStatus: simChangeStatus,
    label: labels,
    simSessionDetails: simSessionDetails,
    simFinishSleep,
    simFinishTests,
    simActivate,
    simInstallationAddress,
    smsSend,
    smsList,
    customerList,

};
module.exports = models;
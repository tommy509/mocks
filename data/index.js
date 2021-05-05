const labels = require('./label');
const simDetails = require('./simDetail');
const simChangeStatus = require('./simChangeStatus');
const simLastSessionDetails = require('./simLastSessionDetails');
const simFinishSleep = require('./simFinishSleepData');
const simFinishTests = require('./simFinishTestsData');
const simActivate = require('./simActivateData');
const models = {

    simDetail: simDetails,
    simChangeStatus: simChangeStatus,
    label: labels,
    simLastSessionDetails: simLastSessionDetails,
    simFinishSleep,
    simFinishTests,
    simActivate,

};
module.exports = models;
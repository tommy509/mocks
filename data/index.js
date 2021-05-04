const labels = require('./label');
const simDetails = require('./simDetail');
const simChangeStatus = require('./simChangeStatus');
const simLastSessionDetails = require('./simLastSessionDetails');
const models = {
  
    simDetail: simDetails,
    simChangeStatus: simChangeStatus,
    label: labels,
    simLastSessionDetails:simLastSessionDetails

};
module.exports = models;
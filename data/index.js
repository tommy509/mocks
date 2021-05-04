const labels = require('./label');
const simDetails = require('./simDetail');
const simChangeStatus = require('./simChangeStatus');

const models = {
  
    simDetail: simDetails,
    simChangeStatus: simChangeStatus,
    label: labels,

};
module.exports = models;
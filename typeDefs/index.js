const simChangeStatus = require('./simChangeStatus');
const simDetails = require('./simDetails');
//var testSchema = require('./testSchema');

var schema = {
    simDetails: simDetails,
    simChangeStatus: simChangeStatus
}

module.exports =  simChangeStatus;
const models = require("../../data");


var resolvers = {
 

    simAssignApns: (args) => {
        console.log(args)
        const apnSettings = models.simActivate.find(simActivate =>simActivate.imsi === args.input.imsi);
        apnSettings.changeType=["ApnChanged"];
        apnSettings.state="Pending";
        apnSettings.creationTime=new Date().toISOString();
        return apnSettings;
    },
    simUnAssignApns: (args) => {
        console.log(args)
        const apnSettings = models.simActivate.find(simActivate =>simActivate.imsi === args.input.imsi);
        apnSettings.changeType=["ApnChanged"];
        apnSettings.state="Pending";
        apnSettings.creationTime=new Date().toISOString();
        return apnSettings;
    },
    simConfigureApns: (args) => {
        console.log(args)
        const apnSettings = models.simActivate.find(simActivate =>simActivate.imsi === args.input.imsi);
        apnSettings.changeType=["ApnChanged"];
        apnSettings.state="Pending";
        apnSettings.creationTime=new Date().toISOString();
        return apnSettings;
    }
 
}


module.exports = resolvers;

var models = require("../../data");


var resolvers = {

    simInstallationAddress: ( args ) => {

        const simData = models.simInstallationAddress.find(simInstallationAddress => simInstallationAddress.imsi === args.input.imsi);
        
        var simInstallationAddress = {
            imsi: simData.imsi,
            installLocation: {
                addressLines: args.input.installLocation.addressLines, 
                postalCode: args.input.installLocation.postalCode, 
                city: args.input.installLocation.city, adminUnits: 
                args.input.installLocation.adminUnits, countryIso: 
                args.input.installLocation.countryIso
            }
        };

        return simInstallationAddress;
    }

}

module.exports = resolvers;
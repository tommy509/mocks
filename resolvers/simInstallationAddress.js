var models = require("../data");


var resolvers = {

    simInstallationAddress: ( args ) => {
        console.log(models)
        const simData = models.simInstallationAddress.find(simInstallationAddress => simInstallationAddress.imsi === args.imsi);
        return { ...simData, addressLines: args.addressLines, postalCode: args.postalCode, city: args.city, adminUnits: args.adminUnits, countryIso: args.countryIso}
    }

}

module.exports = resolvers;
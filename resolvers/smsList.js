var { smsList } = require("../data");


var resolvers = {

    smsList: (smsListInput) => {
        console.log("smsList List: ", smsList);
        console.log(smsListInput);
        return { ...smsList };
    }
}

module.exports = resolvers;
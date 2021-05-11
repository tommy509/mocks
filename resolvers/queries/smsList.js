var { smsList } = require("../../data");


var resolvers = {

    smsList: (smsListInput) => {
        const { pageInfo, edges } = smsList;
        const { imsi, fromDate, toDate, smsIds } = smsListInput;
        console.log("imsi: ", imsi, "fromDate: ", fromDate, "toDate: ", toDate, "smsIds: ", smsIds)

        const filter = [...edges];

        const filter1 = imsi ? filter.filter(i => i.node.id === imsi) : filter;
        const filter2 = fromDate ? filter1.filter(i => dateFromISO8601(i.node.dateSent) >= dateFromISO8601(fromDate)) : filter1;
        const filter3 = toDate ? filter2.filter(i => dateFromISO8601(i.node.dataReceived) <= dateFromISO8601(toDate)) : filter2;
        const filter4 = smsIds ? filter3.filter(i => smsIds.includes(i.node.id)) : filter3

        function dateFromISO8601(isostr) {
            var parts = isostr.match(/\d+/g);
            return new Date(parts[0], parts[1] - 1, parts[2], parts[3], parts[4], parts[5]);
        }

        const result = [...filter4];

        return { pageInfo, edges: result };
    }
}

module.exports = resolvers;
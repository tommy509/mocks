var resolvers = {

    smsSend: (sms) => {
        console.log("sms: ", sms);

        return {
            id: "O8oLAkdrAP6qxQkguRuWOhVR7D0",
            message: sms.message,
            recipientSim: sms.imsi,
            messageEncoding: sms.messageEncoding,
        };
    }
}

module.exports = resolvers;
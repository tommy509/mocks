const pageInfo = {
    total: 1,
    totalRelation: "Eq",
    size: 1,
    hasNextPage: false,
    hasPreviousPage: false,
    startCursor: "R1B3TEF6aWc3OWNNbkp3NmVzWjBHSFNZOWNZIyNwb3MtOTk5OA",
    startPosition: 1,
    endCursor: "R1B3TEF6aWc3OWNNbkp3NmVzWjBHSFNZOWNZIyNwb3MtOTk5OA",
    endPosition: 1,
}

const node = {
    id: "Xr4DBOP9VmEHrgXFswBxXbEdg4E",
    messageText: "Test message",
    sentTo: "48500123456",
    sentFrom: "48500123456",
    msgType: "MO", // MO - originated | MT - terminated).
    dateSent: "2020-02-26T00:00:00+01:00",
    dataReceived: "2020-02-26T00:00:00+01:00",
};

const smsList = {
    pageInfo,
    edges: [
        {
            node,
            cursor: "R1B3TEF6aWc3OWNNbkp3NmVzWjBHSFNZOWNZIyNwb3MtOTk5OA",
            cursorPosition: 1,
        },
    ],
};

module.exports = smsList;
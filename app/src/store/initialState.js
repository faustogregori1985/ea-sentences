export default {
    page: 1,
    features: {
        1: {
            text: 'Feature 1',
            id: 1,
            children: [11],
            parentId: null,
        },
        2: {
            text: 'Feature 2',
            id: 2,
            children: [11],
            parentId: null,
        },
        3: {
            text: 'Feature 3',
            id: 3,
            children: [],
            parentId: null,
        },
    },
    contexts: {
        1: [{
            id: 11,
            text: 'Context 1.1',
            parentId: 1,
            children: [111],
        },
        {
            id: 12,
            text: 'Context 1.2',
            parentId: 1,
            children: [121],
        }],
        2: [{
            id: 21,
            text: 'Context 2.1',
            parentId: 2,
            children: [211],
        }],
    },
    events: {
        11: [{
            id: 111,
            text: 'Events 1.1.1',
            parentId: 11,
            children: [],
        }],
        12: [{
            id: 121,
            text: 'Events 1.2.1',
            parentId: 12,
            children: [],
        }],
        21: [{
            id: 211,
            text: 'Events 2.1.1',
            parentId: 21,
            children: [],
        }],
    },
    sentences: {},
}
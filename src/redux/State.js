let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likeCount: 15},
            {id: 2, message: 'First post', likeCount: 23},
            {id: 3, message: 'Bla', likeCount: 5},
            {id: 4, message: 'Bla', likeCount: 14},
        ]
    },
    dialoguesPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 1, message: 'How is your day'},
            {id: 1, message: 'Yo'},
            {id: 1, message: 'Yo'},
            {id: 1, message: 'Yo'},
            {id: 1, message: 'Yo'},
        ],
        dialogues: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
    },
    sideBar: {
        friends: [
            {id:1, name: 'First'},
            {id:2, name: 'Second'},
            {id:3, name: 'Third'}
        ]
    },
}

export default state;
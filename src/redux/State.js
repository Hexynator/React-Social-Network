let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likeCount: 15},
                {id: 2, message: 'First post', likeCount: 23},
                {id: 3, message: 'Bla', likeCount: 5},
                {id: 4, message: 'Bla', likeCount: 14},
            ],
            newPostText: 'it-kama'
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
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state is changed')
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {

        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer; // observer pattern
    },
}


export default store;
window.store = store;

// store - OOP
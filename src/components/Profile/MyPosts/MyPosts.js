import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = [
        {id: 1, message: 'Hi, how are you', likeCount: 15},
        {id: 2, message: 'First post', likeCount: 23},
        {id: 3, message: 'Bla', likeCount: 5},
        {id: 4, message: 'Bla', likeCount: 14},
    ]

    let postsElement = posts
        .map(p => <Post message={p.message} likeCount={p.likeCount}/>
        )

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}></div>
            {postsElement}
        </div>
    );
};
export default MyPosts;

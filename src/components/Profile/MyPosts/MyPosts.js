import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
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
            <Post message="Hi, How are you?" likeCount=" 15"/>
            <Post message="Its my first post " likeCount=" 23"/>
        </div>
    );
};
export default MyPosts;

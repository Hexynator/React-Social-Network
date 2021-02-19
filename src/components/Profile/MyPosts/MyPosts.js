import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <textarea></textarea>
            <button>Add post</button>
            <div className={s.posts}></div>
            <Post message="Hi, How are you?" likeCount=" 15"/>
            <Post message="Its my first post " likeCount={20}/>
        </div>
    );
};
export default MyPosts;

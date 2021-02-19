import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://image.pngaaa.com/271/1721271-small.png"/>
            {props.message}
            <div>
                <span>like</span>
                {props.likeCount}
            </div>
        </div>
    );
};
export default Post;

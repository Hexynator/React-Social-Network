import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      </div>
      <div>ava + description</div>
      <div>
        My posts
        <div>New Posts</div>
      </div>
      <div className={s.posts}>
        <div className={s.item}>post1</div>
        <div className={s.item}>post2</div>
      </div>
    </div>
  );
};
export default Profile;

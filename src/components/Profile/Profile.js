import s from "../Profile/Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            </div>
            <div>ava + description</div>
            <MyPosts/>
        </div>
    );
};
export default Profile;

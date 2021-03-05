import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img className={s.profilePic}
                     src='https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8&w=1000&q=80'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small}/>
                <span>
                    {props.profile.aboutMe}
                </span>
            </div>
        </div>
    );
};
export default ProfileInfo;

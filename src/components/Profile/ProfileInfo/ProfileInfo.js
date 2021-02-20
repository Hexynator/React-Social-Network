import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={s.profilePic}
                     src='https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8&w=1000&q=80'/>
            </div>
            <div className={s.descriptionBlock}>ava + description</div>
        </div>
    );
};
export default ProfileInfo;

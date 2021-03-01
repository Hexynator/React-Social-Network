import React from 'react';
import * as axios from "axios";
import imagemock from '../../Assets/Images/imagemock.jpeg'
import styles from './Users.module.css'

let Users = (props) => {

    let getUsers = () => {

    if (props.users.length === 0) { // set users only if there is no users, otherwise there is loop which leads to react maximum depth error

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        });
     }
    }
    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : imagemock} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Follow</button> : <button onClick={() => {
                            props.follow(u.id)
                        }}>Unfollow</button>
                        }
                    </div>
                    </span>
                <span>
                    <span>
                     <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
                </span>
            </div>)
        }
    </div>
}


export default Users;
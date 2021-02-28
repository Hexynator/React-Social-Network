import React from 'react';
import styles from './Users.module.css'

let Users = (props) => {

    if (props.users.length === 0 ) { // set users only if there is no users, otherwise there is loop which leads to react maximum depth error
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://styles.redditmedia.com/t5_3mxbb7/styles/communityIcon_n8b48e315ra61.png?width=256&s=2a4afb06bd95b4ad2ceaebd132dbe114c5a1f18a',
                followed: false,
                fullName: 'John',
                status: 'Developer',
                location: {city: 'Los Angeles', country: 'United States of America'}
            },
            {
                id: 2,
                photoUrl: 'https://styles.redditmedia.com/t5_3mxbb7/styles/communityIcon_n8b48e315ra61.png?width=256&s=2a4afb06bd95b4ad2ceaebd132dbe114c5a1f18a',
                followed: false,
                fullName: 'Rich',
                status: 'Developer',
                location: {city: 'Oslo', country: 'Norway'}
            },
            {
                id: 3,
                photoUrl: 'https://styles.redditmedia.com/t5_3mxbb7/styles/communityIcon_n8b48e315ra61.png?width=256&s=2a4afb06bd95b4ad2ceaebd132dbe114c5a1f18a',
                followed: true,
                fullName: 'Mike',
                status: 'Developer',
                location: {city: 'Helsinki ', country: 'Finland'}
            },
            {
                id: 4,
                photoUrl: 'https://styles.redditmedia.com/t5_3mxbb7/styles/communityIcon_n8b48e315ra61.png?width=256&s=2a4afb06bd95b4ad2ceaebd132dbe114c5a1f18a',
                followed: true,
                fullName: 'Jose',
                status: 'Developer',
                location: {city: 'Tallinn', country: 'Estonia'}
            },]);
    }


    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
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
                     <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
                </span>
            </div>)
        }
    </div>
}


export default Users;
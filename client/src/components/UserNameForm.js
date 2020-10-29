import React from 'react'
import {withRouter} from 'react-router';

const UserNameForm = (props) => {
    const submitHandler = e =>{
        e.preventDefault();
        props.history.push({
            pathname:"/chatRoomSelection",
            state:{username:e.target.username.value}
        });
    }
    return (
        <div className="userNameFormContent" onSubmit={e => submitHandler(e)}>
            <form>
                <label className="userNameFormLabel" htmlFor="username">Enter a username(required):</label>
                <input type="text" id="username" name="username" className="userNameForm" required />
                <button  className="userNameFormSubmit" type="subimt">Submit User Name</button>
            </form>
        </div>
    )
}

export default withRouter(UserNameForm);

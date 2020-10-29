import React from "react";
import { withRouter } from "react-router";

const ChatRoomSelection = (props) => {
  const { username } = (props.location && props.location.state) || {};
  if (username === undefined) {
    props.history.push("/");
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(
      `${username} has selected ${e.target.chatRooms.value} Chat Room`
    );
    switch (e.target.chatRooms.value) {
      case "physics":
        props.history.push({
            pathname:"/physics",
            state:{username}
        });
        break;
      case "english":
        props.history.push({
            pathname:"/english",
            state:{username}
        });
        break;
      case "gaming":
        props.history.push({
            pathname:"/gaming",
            state:{username}
        });
        break;
      default:
        alert("Please Select a chat room");
    }
  };
  const redirectHandler = e =>{
      props.history.push('/');
  }
  return (
    <div className="chatRoomSelectionContent">
      <h1 style={{marginBottom:'0'}}>{`Welcome ${username}!`}</h1>
      <button onClick={e => redirectHandler(e)}>Pick another username</button>
      <form onSubmit={(e) => submitHandler(e)}>
        <label className="chatRoomSelectionFormLabel" htmlFor="chatRooms">
          Pick a chat room below:
        </label>
        <br />
        <select
          className="chatRoomSelectionForm"
          id="chatRooms"
          name="chatRooms"
        >
          <option value="nothing">Select</option>
          <option value="physics">Physics Room</option>
          <option value="english">English Room </option>
          <option value="gaming">Gaming Room</option>
        </select>
        <button className="chatRoomSelectionFormSubmit" type="submit">
          Join Room(Your user name will be used)
        </button>
      </form>
    </div>
  );
};

export default withRouter(ChatRoomSelection);

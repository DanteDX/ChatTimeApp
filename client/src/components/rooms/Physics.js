import React,{useEffect,useState} from 'react'
import socketIOClient from "socket.io-client";
const ENDPOINT = "/";


const Physics = (props) => {
    const [messageState,setMessageState] = useState([]);
    const [socket,setSocket] = useState(undefined);
    useEffect(()=>{
        const socketClient = socketIOClient(ENDPOINT);
        setSocket(socketClient);
    },[])
    if(socket !== undefined){
        socket.on('physicsChat',data=>{
            console.log(data);
            setMessageState([...messageState,data]);
        })
    }
    const {username} = (props.location && props.location.state) || {};
    if(username === undefined){
        props.history.push('/');
    }
    const anotherHandler = e =>{
        props.history.push({
            pathname:'/chatRoomSelection',
            state:{username}
        })
    }

    const messageSubmitHandler = e =>{
        e.preventDefault();
        const data = {username:props.location.state.username,message:e.target.message.value};
        // setMessageState([...messageState,data]);
        socket.emit('physicsChat',data);
        e.target.message.value = "";
    }

    const messageList = messageState.map(eachMessage =>{
        return(
            <div className="eachMessage" key={Math.random()}>
                <h4 className="eachMessageUserName">{eachMessage.username}:</h4>
                <p className="eachMessageTextContent">{eachMessage.message}</p>
            </div>
        )
    })
    
    return (
        <div>
            <button onClick={e => anotherHandler(e)}>Pick Another Chatroom</button>
            <p>Welcome{username}</p>
            <p>Physics Chat room</p>
            <div className="messageListContents">
                {messageList}
            </div>
            <form onSubmit={e => messageSubmitHandler(e)}>
                <label htmlFor="message">Enter Your message:</label><br/>
                <textarea id="message" name="message" cols="30" rows="10" placeholder="type here...."></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Physics;

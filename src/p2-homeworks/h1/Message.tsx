import React from 'react'
import Post from "./AlternativeMessage";
import classes from './Message.module.css';

type MessagePropsType ={
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={classes.border}>
           <img className={classes.img} id={"#hw1-avatar-1"} src={props.avatar}/>
            <div className={classes.bordertext}>
            <div className={classes.name}>{props.name} id={'#hw1-name-1'}</div>
            <div className={classes.message}>{props.message} id={'#hw1-text-1'} </div>
            <div className={classes.time}>{props.time} id={'#hw1-time-1'}</div>
        </div>
        </div>
    )
}

export default Message

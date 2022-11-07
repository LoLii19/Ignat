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
           <img className={classes.img} src={props.avatar}/>
            <div className={classes.bordertext}>
            <div className={classes.name}>{props.name}</div>
            <div className={classes.message}>{props.message}</div>
            <div className={classes.time}>{props.time}</div>
        </div>
        </div>
    )
}

export default Message

import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'http://pm1.narvii.com/6463/9144c3c2352b6490403c8d6bf7479885e95f8ce9_00.jpg',
    name: 'Artem',
    message: 'npm start нажимал?',
    time: '20:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1

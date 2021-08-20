import { Button } from 'antd'
import { Input } from 'antd'
import { Space } from 'antd'
import { SendOutlined } from '@ant-design/icons'
import { Card } from 'antd';
import { Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useState } from "react"
import { useDispatch } from "react-redux"
import actions from "../../actions"


export const MessageContent = props => {
    const { message } = props
    return(
        <Space align="baseline">
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            <Card id="sdf" style={{ width: 300 }}>
                {message}
            </Card>
        </Space>
    )
}


export const ChatMessageInputField = () => {
    const [message, setMessage] = useState(undefined)
    const dispatch = useDispatch();

    const handleSendMessage = () => {
        if (message.trim()) {
            dispatch(actions.sendMessage(message))
        }
        setMessage(undefined)
    }
    
    return(
        <Space>
            <Input
                placeholder="Enter message here"
                size="large"
                value={message}
                onChange={event => setMessage(event.target.value)}
                onPressEnter={() => ( message === undefined || message == "" ? "" : handleSendMessage())}
                style={{ width: 500 }}
            />
            <Button type="primary" icon={<SendOutlined />} onClick={() => handleSendMessage()}/>
        </Space>
    )
}

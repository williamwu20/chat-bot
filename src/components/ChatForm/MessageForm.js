import { Button, Input, Space, Card, Avatar } from 'antd'
import { SendOutlined } from '@ant-design/icons'
import { UserOutlined } from '@ant-design/icons';
import { useState } from "react"
import { useDispatch } from "react-redux"
import actions from "../../actions"


export const MessageContent = props => {
    const { content: { from, message }} = props

    const chatBotMessage = <Space align="baseline">
    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
        <Card style={{ maxWidth: 600, whiteSpace: "normal", overflowWrap: 'break-word', marginBottom:'10px'}}>
            {message}
        </Card>
    </Space>

    const userMessage = <Space align="baseline" style={{ float: 'right' }}>
        <Card style={{ maxWidth: 600, whiteSpace: "normal", overflowWrap: 'break-word', marginBottom:'10px'}}>
            {message}
        </Card>
        <Avatar style={{ backgroundColor: '#9254de' }} icon={<UserOutlined />} />
    </Space>

    switch (from) {
        case 'chatbot':
            return(chatBotMessage)
        case 'user':
            return(userMessage)
        default:
            return(chatBotMessage)
    }
}


export const ChatMessageInputField = () => {
    const [message, setMessage] = useState(undefined)
    const dispatch = useDispatch();

    const handleSendMessage = () => {
        if (message.trim()) {
            dispatch(actions.sendMessage({ from: 'user', message }))
            if (message.trim() == "tell me a joke") {
                dispatch(actions.handleJoke())
            }
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

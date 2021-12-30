import { Layout, Space, Button, Typography } from 'antd';
import { MessageContent } from '../components/ChatForm/MessageForm';
import { ChatBotHeader } from '../components/Header/Header';
import { ChatBotFooter } from '../components/Footer/Footer'
import { useSelector } from 'react-redux';
import { useRef, useEffect } from "react"

const { Content } = Layout;

const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView({block: "end"}));
    return <div inline ref={elementRef} />;
  };

const MainPage = () => {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }

    const messages = useSelector(state => state.messages.data)

    return(
    <Layout className="layout">
        <ChatBotHeader />
        <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">
                <Space direction="vertical" size="large" style={{ width: '100%'}} >
                    {messages.map((message, index) => 
                            <MessageContent key={index} content={message}/>
                    )}
                </Space>
                <AlwaysScrollToBottom />
            </div>
            
        </Content>
        <ChatBotFooter />
    </Layout>
    )}

export default MainPage
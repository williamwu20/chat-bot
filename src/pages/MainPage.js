import { Layout, Space } from 'antd';
import { ChatBotHeader } from '../components/Header/Header'
import { MessageContent } from '../components/ChatForm/MessageForm';
import { ChatBotFooter } from '../components/Footer/Footer'
import { useSelector } from 'react-redux';
import { useRef, useEffect } from "react"

const { Content } = Layout;

const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
  };

const MainPage = () => {
    const messages = useSelector(state => state.messages.data);
    
    return(
    <Layout className="layout">
        <ChatBotHeader />        
        <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">
                <Space direction="vertical" size="large">
                    {messages.map((message, index) => 
                            <MessageContent key={index} message={message}/>
                    )}
                </Space>
            </div>
        </Content>
        <ChatBotFooter />
    </Layout>
    )}

export default MainPage
import { Layout } from 'antd';
import { ChatMessageInputField } from '../ChatForm/MessageForm';

const { Footer } = Layout;

export const ChatBotFooter = () => 
    <Footer style={{ 
        borderTop: '1px solid #e8e8e8',
        position: 'sticky',
        bottom: 0,
        backgroundColor: 'white',
        textAlign: 'center'}} >
        <ChatMessageInputField />
    </Footer>
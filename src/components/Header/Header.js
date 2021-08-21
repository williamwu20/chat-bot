import { PageHeader, Button } from 'antd';

export const ChatBotHeader = () => 
  <div className="chat-bot-header">
    <PageHeader
      style={{
        position: 'sticky',
        zIndex: 1,
        top: 0,
        width: '100%'
      }}
      className="site-page-header"
      title="Chat Bot"
      subTitle="Interact with the chat bot"
      extra={[
        <Button key="1" href="https://github.com/williamwu20/chat-bot" target="_blank">GitHub</Button>,
      ]}
    />
  </div>
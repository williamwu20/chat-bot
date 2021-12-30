import { Layout, Button, Space, Typography } from 'antd';

export const ChatBotHeader = () => 
  <Layout.Header style={{ backgroundColor: 'aquamarine', position: 'sticky', zIndex: 1, top: 0, }}>
    <Space>
        <Typography.Title level={3}>Chat Bot</Typography.Title>
    </Space>
    <Button style={{ float: 'right', margin: '16px 24px 16px 0' }} href="https://github.com/williamwu20/chat-bot" target="_blank">GitHub</Button>
  </Layout.Header>
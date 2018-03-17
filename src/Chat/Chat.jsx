// Imports
import React from 'react';
import { Row, Col } from 'react-bootstrap';

// Components
import Messages from '../Messages/Messages';
import ChatInput from '../ChatInput/ChatInput';

// Styles
import './Chat.css';

const Chat = () => (
  <Row id="chat-box">
    <Col smOffset={2} sm={8} id="chat">
      <Messages />
      <ChatInput />
    </Col>
  </Row>
);

export default Chat;

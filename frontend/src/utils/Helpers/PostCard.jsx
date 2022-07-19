import { Card, Row, Col, Divider } from "antd";
import { Button } from "antd";
import DeleteModel from "../../components/Modals/DeleteModel";
import { useState } from "react";

import "./PostCard.css";

const PostCard = ({ countryToSend, countryToRecieve, amount, dateTime, postId }) => {
  const [isModalVisible,setIsModalVisible]=useState(false)
  
  const showModelhandler=()=>{ 
    setIsModalVisible(true);
  }
  return (
    <>
      <Card
        title={"Post Id: " + postId}
        bordered={false}
        style={{
          width: 400,
          paddingBottom: '1rem',
        }}
      >
        <Divider orientation="center"><p>Date: {dateTime}</p></Divider>
        <Row>
          <Col style={{ width: '50%', textAlign: 'center' }}>
            Send to
          </Col>
          <Col style={{ textAlign: 'center', width: '50%' }}>
            {countryToSend}
          </Col>
        </Row>
        <Row style={{ paddingTop: '1rem' }}>
          <Col style={{ width: '50%', textAlign: 'center' }}>
            Reciver
          </Col>
          <Col style={{ textAlign: 'center', width: '50%' }}>
            {countryToRecieve}
          </Col>
        </Row>
        <Row style={{ paddingTop: '1rem' }}>
          <Col style={{ width: '50%', textAlign: 'center' }}>
            Amount
          </Col>
          <Col style={{ textAlign: 'center', width: '50%' }}>
            {amount}
          </Col>
        </Row>
        <Row style={{ paddingTop: '1rem' }}>
          <Col style={{ float: 'left', width: "50%" }}>
            <Button onClick={showModelhandler}>Delete</Button>
          </Col>
          <Col style={{ width: "50%" }}>
            <Button>Update</Button>
          </Col>
        </Row>
      </Card>
      <DeleteModel isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} postId={postId}/>
    </>
  );
};

export default PostCard;

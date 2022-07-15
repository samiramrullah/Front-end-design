import React from 'react'
import { Row, Col, Divider, Card } from 'antd';
import './Services.css'
const Services = () => {
    const { Meta } = Card;
    return (
        <>
            <Divider orientation="center">Our Services</Divider>
            <Row id='servicesRow'>
                <Col>
                    <Card
                        hoverable
                        style={{
                            width: 240,
                        }}
                        cover={<img alt="example" src="https://craftwaresweden.se/wp-content/uploads/2019/12/shutterstock_455108011-min.jpg" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col>
                    <Card
                        hoverable
                        style={{
                            width: 240,
                        }}
                        cover={<img alt="example" src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_14/1554952/hank-shake-continue-today-main-200403.jpg" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col style={{ backgroundColor: 'red' }}>
                    <Card
                        hoverable
                        style={{
                            width: 240,
                        }}
                        cover={<img alt="example" src="https://www.bmw-me.com/content/dam/bmw/common/topics/offers-and-services/personal-services/fast-lane-service/introduction-fast-lane-service.jpg" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col>
                    <Card
                        hoverable
                        style={{
                            width: 240,
                        }}
                        cover={<img alt="example" src="https://craftwaresweden.se/wp-content/uploads/2019/12/shutterstock_455108011-min.jpg" />}
                    >
                         <Meta  />
                        <h4>Trust</h4>
                        Send Money in one of the cheapest rate <br/>
                        100% trust Worthy Services
                       
                    </Card>
                </Col>
            </Row>


        </>
    )
}

export default Services
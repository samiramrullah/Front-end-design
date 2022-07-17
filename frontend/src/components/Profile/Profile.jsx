import PostCard from "../../utils/Helpers/PostCard";
import { useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import { Card, Row, Col, Button, Upload } from 'antd';
import { UploadOutlined } from "@ant-design/icons";
const { Meta } = Card;
const Post = () => {
    const props = {
        action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",

        onChange({ file, fileList }) {
            if (file.status !== "uploading") {
                console.log(file, fileList);
            }
        }
    };


    const [data, setdata] = useState();
    useEffect(() => {
        var token = localStorage.userToken;
        var decoded = jwt_decode(token);
        var userId = decoded.userId;
        const userData = {
            userId
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`
        }
        axios.post('http://localhost:5000/post/userinfo', userData, { headers: headers })
            .then((res => setdata(res.data)))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <Card
                hoverable
                style={{
                    width: 300,
                }}

                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}

            >
                <Upload {...props}>
                    <Button style={{ top: "-4rem", right: "-11rem" }} icon={<UploadOutlined />}>Upload</Button>
                </Upload>
                <Meta title="Samir Alam" />

                <Row style={{ marginTop: '0.5rem' }}>

                    <Col>
                        Name :
                    </Col>
                    <Col style={{ paddingLeft: '1rem' }}>
                        Samir Alam
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Email :
                    </Col>
                    <Col style={{ paddingLeft: '1rem' }}>
                        samiramrullah@gmail
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Address :
                    </Col>
                    <Col style={{ paddingLeft: '1rem' }}>
                        Sector-12 , Chandigarh, 160012, India.
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'space-evenly' }}>
                    <Col style={{ borderBox: "25px" }}>
                        <Button type="primary" size='small'>
                            Update
                        </Button>
                    </Col>
                    <Col>
                        <Button type="primary" size='small'>
                            Delete
                        </Button>
                    </Col>
                </Row>
            </Card>
            <center className="row mt-5">
                {Array.isArray(data) ? (
                    data?.map(itm => (
                        <div className="col"><PostCard countryToSend={itm.countryToSend} countryToRecieve={itm.countryToRecieve} amount={itm.amount} dateTime={itm.datetime} postId={itm._id} /></div>
                    ))
                ) : null}


            </center>
        </div>
    )
}

export default Post;
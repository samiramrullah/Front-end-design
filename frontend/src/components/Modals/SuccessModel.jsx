import React from 'react'
import { Modal,Space } from 'antd';
import { useState } from 'react';


const success = () => {
    Modal.success({
        content: 'some messages...some messages...',
    });
};

const SuccessModel = ({showmodel,setshowmodel}) => {
    // const [showmodel,setshowmodel]=useState(true);
    return (
        <Space wrap>
           {showmodel&&success()}
        </Space>
    )
}

export default SuccessModel
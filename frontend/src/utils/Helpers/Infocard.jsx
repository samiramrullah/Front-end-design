import React from 'react'
import { Modal, Space } from 'antd';
import { useDispatch } from 'react-redux';
import { setpostStatus } from '../../redux/PostSlice';
const Infocard = () => {
  const dispatch = useDispatch();
  const info = () => {
    Modal.success({
      title: 'Posted Successfully',
      content: (
        <div>
          <p>We will contact you at your registered contact number soon</p>
          <p>You can also contact us at +91-9041952237</p>
        </div>
      ),

      onOk() {
        dispatch(setpostStatus(false))
      },
    });
  };
  return (
    <Space wrap>
      {info()}
    </Space>
  )
}

export default Infocard
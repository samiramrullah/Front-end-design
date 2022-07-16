import React from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { useDispatch } from 'react-redux';
import {setdeleteStatus} from '../../redux/ProfileSlice';
const { confirm } = Modal;

const ConfirmModal = () => {
    const dispatch=useDispatch();
    const showDeleteConfirm = () => {
        confirm({
            title: 'Are you sure delete this task?',
            icon: <ExclamationCircleOutlined />,
            content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',

            onOk() {
                console.log('OK');
                dispatch(setdeleteStatus(true));
            },

            onCancel() {
                dispatch(setdeleteStatus(false))
            },
        });
    };
    return (
        <div>{(showDeleteConfirm())}</div>
    )
}

export default React.memo(ConfirmModal);
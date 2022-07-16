import axios from "axios";
import { Card } from "antd";
import { Button } from "antd";
import ConfirmModal from "./ConfirmModal";
import {setdeleteStatus} from '../../redux/ProfileSlice';
import {useDispatch,useSelector} from 'react-redux';
import "./PostCard.css";

const PostCard = ({ countryToSend, countryToRecieve, amount, dateTime, postId }) => {
  const dispatch=useDispatch();
  const isdeletetrue=useSelector((state)=>state.profile.deleteStatus)
  const deletePost = () => {
    dispatch(setdeleteStatus(true));
    var token = localStorage.userToken;
    const userData = {
      postId
    };
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${token}`
    }
    axios.post('http://localhost:5000/post/deletepost', userData, { headers: headers })
      .then((res => alert("Deleted Successfully")))
      .catch(err => console.log(err))
  };
  console.log(isdeletetrue);
  return (
    <div className="site-card-border-less-wrapper">
      <Card
        title={`${postId}`}
        bordered={false}
        style={{
          width: 300,
        }}
      >
        {isdeletetrue&&<ConfirmModal/>}
        <h3>Post Details</h3>
        <div className="row">
          Posted Data
          <div className="col " >{dateTime}</div>
        </div>
        <div className="row">
          Send from
          <div className="col " >{countryToSend}</div>
        </div>
        <div className="row col mt-2 auto">
          Reciver
          <div className="col col mt-2 auto">{countryToRecieve}</div>
        </div>
        <div className="row col mt-2 auto">
          Amount
          <div className="col col mt-2 auto">{amount}</div>
        </div>
        <div >
          <Button style={{ justifyContent: 'space-evenly' }} size="default">Update</Button>
          <Button onClick={deletePost} size="default">
            Delete
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PostCard;

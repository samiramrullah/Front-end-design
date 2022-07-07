import axios from "axios";
import { Card } from "antd";
import { Button } from "antd";
import "./PostCard.css";

const PostCard = ({ countryToSend, countryToRecieve, amount, dateTime, postId }) => {
  const deletePost = () => {
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
  return (
    <div className="site-card-border-less-wrapper">
      <Card
        title={`${postId}`}
        bordered={false}
        style={{
          width: 300,
        }}
      >
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
       <div>
       <Button size="default" className="float-left">Update</Button>
        <Button onClick={deletePost} size="default" className="float-right" >
          Delete
        </Button>
       </div>
      </Card>
    </div>
  );
};

export default PostCard;

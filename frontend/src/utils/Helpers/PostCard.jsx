import axios from "axios";
import { Card } from "antd";
import { Button } from "antd";
import "./PostCard.css";

const PostCard = ({ countryToSend, countryToRecieve, amount, dateTime,postId }) => {
  const deletePost = () => {
    var token = localStorage.userToken;
        // var decoded = jwt_decode(token);
        // var userId = decoded.userId;
        const userData = {
          postId
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`
        }
        axios.post('http://localhost:5000/post/deletepost', userData, { headers: headers })
            .then((res =>alert("Deleted Successfully")))
            .catch(err => console.log(err))
  };
  return (
    <div className="site-card-border-less-wrapper">
      <Card
        title={dateTime}
        bordered={false}
        style={{
          width: 300,
        }}
      >
        <p>
          Send from <b>{countryToSend}</b>
        </p>
        <p>
          Amount <b>{amount}</b>
        </p>
        <p>
          Reciving Country <b>{countryToRecieve}</b>
        </p>
        <Button size="default">Update</Button>
        <Button onClick={deletePost} size="default">
          Delete
        </Button>
      </Card>
    </div>
  );
};

export default PostCard;

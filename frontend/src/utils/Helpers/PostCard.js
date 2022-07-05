import { Card } from "antd";
import {Button} from 'antd';
import "./PostCard.css";

const PostCard = ({ countryToSend, countryToRecieve, amount }) => {
  return (
    <div className="site-card-border-less-wrapper">
      <Card
        title="Post Information"
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
        <Button size="default">Delete</Button>
      </Card>
    </div>
  );
};

export default PostCard;

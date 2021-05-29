import './Card.css'
import { Card } from 'antd';

const { Meta } = Card;

const Card1 = (props) => {
  const profile = props.profile
  return (
    <div className="github-profile">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img src={profile.avatar_url} alt=''/>}
        >
          <Meta title={profile.name} description={profile.company}/>
      </Card>
      
    </div>
  )
}
/*const Card1 = (props) => {
  const profile = props.profile
  return (
    <div className="github-profile">
      <img src={profile.avatar_url} alt=''/>
      <div className="info">
      <div className="name">{profile.name}</div>
      <div className="company">{profile.company}</div>
      </div>
    </div>
  )
}*/
export default Card1
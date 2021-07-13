import '../Publications/Public.css'
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
        onClick={iniciarSesion}
        >
          <Meta title={profile.name} description={profile.company}/>
      </Card>
      
    </div>
  )
}

export default Card1
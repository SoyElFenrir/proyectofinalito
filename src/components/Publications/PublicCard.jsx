import './Public.css'
import { Card } from 'antd';
import {Link} from 'react-router-dom';

const { Meta } = Card;

const Publication = (props) => {
  const profile = props.profile
  return (
    <div class="publicacion">
      <Link to={`/publicSelect/${profile._id}`}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt=''/>}
          >
            <Meta title={profile.title} description={profile.subtitle} />
        </Card>
      </Link>
    </div>
  )
}

export default Publication
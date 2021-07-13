import './Public.css'
import { Card } from 'antd';
import {NavLink} from 'react-router-dom';
import Cookies from 'universal-cookie';

const { Meta } = Card;

const cookies = new Cookies();
function capturarId(cuerpo){
  /*cookies.set('id_public', {cuerpo._id}, {path: '/publicSelect'});*/
  let ldec_id = cuerpo
  cookies.set('id_public', ldec_id, {path: '/publicSelect'});
  /*console.log('el id del body', cuerpo._id)*/
  console.log('el id del let', ldec_id)
}



const Publication = (props) => {
  const profile = props.profile
  return (
    <div class="publicacion">
      <button onClick={capturarId(profile._id)}>
        hola
        {/*<NavLink to='/publicSelect' > Ver publicacion  </NavLink>*/}
      </button>
      
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt=''/>}
        >
          <Meta title={profile.title} description={profile.subtitle} />
      </Card>
      
    </div>
  )
}

export default Publication
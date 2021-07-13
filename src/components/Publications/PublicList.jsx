import Card from '../Publications/PublicCard'

const CardList = (props) => {

  return(
  <div >
    {props.data.map(profile => <Card  profile={profile} key={profile._id}/>)}
  </div>
  )
}

export default CardList
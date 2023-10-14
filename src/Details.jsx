import {useParams} from 'react-router-dom';
const Details =()=>{
    const {id} = useParams();
    return(
        <div>
            Hi kushal!!!  , {id}
        </div>
    )
}

export default Details;
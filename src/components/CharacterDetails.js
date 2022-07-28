import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'

function CharacterDetails() {

    const { characterId } = useParams();

    const [details, setDetails] = useState(null);

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_BASE_URL + "/characters/" + characterId)
            .then(response => {
                setDetails(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);


    const renderDetails = () => {
        return (
            <div className='character'>
                <h2>{details.name}</h2>
                <p>Occupation: {details.occupation}</p>
                <p>Weapon: {details.weapon}</p>

                <Link to="/characters">Back</Link>
            </div>
        );
    }


    return (
        <>
            {details === null
                ? <p>loading...</p>
                : renderDetails()
            }
        </>
    );
}

export default CharacterDetails;
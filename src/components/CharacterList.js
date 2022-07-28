import { NavLink } from 'react-router-dom';

function CharacterList(props) {

    const renderCharacters = () => {
        const result = props.characters.map(element => {
            return (
                <div className='character'>
                    <h2>{element.name}</h2>
                    <p>Occupation: {element.occupation}</p>
                    <p>Weapon: {element.weapon}</p>

                    <NavLink to={`/characters/${element.id}`}>More Details</NavLink>
                    {/* <NavLink to={"/characters/" + element.id}>More Details</NavLink> */}

                    <button onClick={() => { props.callbackToDelete(element.id) }}>Delete</button>
                </div>
            );
        });

        return result;
    }


    return (
        <div>
            {props.characters === null
                ? <p>loading...</p>
                : renderCharacters()
            }
        </div>
    )
}

export default CharacterList;
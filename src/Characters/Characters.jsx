import './Characters.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import CharacterFilter from '../CharacterFilter/CharacterFilter';
const Characters = () => {

    const btnStyle = {
        background: 'green',
        color: 'black',
        height: '40px',
        width: '90px',
        boxShadow: '0px 0 10px green',
        borderRadius: '5px',
        fontSize: '20px',
        float: 'right',
        position: 'relative',
        left: '-14px',

    }
    const [characters, setCharacters] = useState([]);
    const [filter, setFilter] = useState('');

    const [page, setPage] = useState(1)
    const [gender, setGender] = useState("");
    const [species, setSpecies] = useState("");
    const [status, setStatus] = useState("");
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}&gender=${gender}&species=${species}&status=${status}`)

            .then(response => response.json())
            .then(data => {
                setCharacters(data.results)



            }
            )
            .catch(error => console.error(error));
    }, [page, gender, species, status]);
    function PrevPage() {
        if (page > 1)
            setPage(page - 1)
    }

    function NextPage() {
        setPage(page + 1)
    }



    const changeGender = (slectedGender) => {
        setGender(slectedGender)
    }
    const changeSpecies = (slectedSpecies) => {
        setSpecies(slectedSpecies)
    }

    const changeStatus = (slectedStatus) => {
        setStatus(slectedStatus)
    }

    const filteredCharacters = characters.filter(character =>
        character.name.toLowerCase().includes(filter.toLowerCase())
    )
    return (
        <div className="Characters">

            <h3 className='TextH3'>Characters</h3>
            <CharacterFilter changeGender={changeGender} changeSpecies={changeSpecies} changeStatus={changeStatus} />

            <input type="text" className='Input' placeholder='Write character name' value={filter}
                onChange={event => setFilter(event.target.value)} />

            <div className="Container">
                {filteredCharacters.map(character => (
                    <div className='Card' key={character.id} data-aos="fade-up">
                        <img src={character.image} alt="" className='avatar' />

                        <div className='CardText'>
                            <h4 className='Name'> {character.name}</h4>
                            <div className="CardTextCont">
                                <p className='CardTextP'>Gender <span>{character.gender}</span> </p>
                                <p className='CardTextP'> Status <span>{character.status}</span> </p>
                                <p className='CardTextP'> Species <span>{character.species}</span> </p>


                            </div>
                            <div className="CardButton">
                                <Button variant="contained" style={btnStyle}>Info</Button>


                            </div>
                        </div>





                    </div>


                ))}

            </div>
            <div className="Pagination">
                <button onClick={PrevPage} disabled={page === 1} className='PagBtn'>Prev</button>
                <div className='pageCount'>{`Page ${page}`}</div>
                <button onClick={NextPage} disabled={page === 41} className="PagBtn">Next</button>

            </div>

        </div>
    )
}
export default Characters
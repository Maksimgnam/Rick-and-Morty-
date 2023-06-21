

import './Characters.css';
import { useState, useEffect } from 'react';
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
    const [page, setPage] = useState(1);
    const [gender, setGender] = useState('');
    const [species, setSpecies] = useState('');
    const [status, setStatus] = useState('');
    const [openPopup, setOpenPopup] = useState(false);
    const [openCard, setOpenCard] = useState(true);
    const [openUp, setOpenUp] = useState(true);
    const [openPagination, setOpenPagination] = useState(true)
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}&gender=${gender}&species=${species}&status=${status}`)
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results);
            })
            .catch(error => console.error(error));
    }, [page, gender, species, status]);

    function PrevPage() {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    function NextPage() {
        setPage(page + 1);
    }

    const changeGender = slectedGender => {
        setGender(slectedGender);
    };

    const changeSpecies = slectedSpecies => {
        setSpecies(slectedSpecies);
    };

    const changeStatus = slectedStatus => {
        setStatus(slectedStatus);
    };

    const filteredCharacters = characters.filter(character =>
        character.name.toLowerCase().includes(filter.toLowerCase())
    );
    const OpenPopup = character => {
        setSelectedCharacter(character)
        setOpenPopup(true);
        setOpenCard(false)
        setOpenUp(false)
        setOpenPagination(false)
    }
    const ClosePopup = () => {
        setOpenPopup(false);
        setOpenCard(true)
        setOpenUp(true)
        setOpenPagination(true)

    }



    return (
        <div className="Characters" id="Character">
            <h3 className="TextH3">Characters</h3>



            {openUp && (
                <>

                    <CharacterFilter
                        changeGender={changeGender}
                        changeSpecies={changeSpecies}
                        changeStatus={changeStatus}
                    />
                    <input
                        type="text"
                        className="Input"
                        placeholder="Write character name"
                        value={filter}
                        onChange={event => setFilter(event.target.value)}
                    />
                </>

            )}




            {filteredCharacters.length > 0 ? (
                <div className="Container">
                    {openCard &&
                        filteredCharacters.map(character => (
                            <div className="Card" key={character.id} data-aos="fade-up">
                                <img src={character.image} alt="" className="avatar" />
                                <div className="CardText">
                                    <h4 className="CharacterName">{character.name}</h4>
                                    <div className="CardTextCont">
                                        <p className="CardCharacterTextP">
                                            Gender <span className='CharacterSpan'>{character.gender}</span>
                                        </p>
                                        <p className="CardCharacterTextP">
                                            Status <span className='CharacterSpan'>{character.status}</span>
                                        </p>
                                        <p className="CardCharacterTextP">
                                            Species <span className='CharacterSpan'> {character.species}</span>


                                        </p>
                                    </div>
                                    <div className="CardButton">
                                        <Button variant="contained" style={btnStyle} onClick={() => OpenPopup(character)}>
                                            Info
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            ) : (
                <p className="NoCardText">No locations found...</p>
            )}
            {
                openPagination && (
                    <div className="Pagination">
                        <button onClick={PrevPage} disabled={page === 1} className="PagBtn">
                            Prev
                        </button>
                        <div className="pageCount">{`Page ${page}`}</div>
                        <button onClick={NextPage} disabled={page === 41} className="PagBtn">
                            Next
                        </button>

                    </div>

                )
            }


            {openPopup && selectedCharacter && (

                <div className="Popup">
                    <img src={selectedCharacter.image} alt="" className='avatar' />
                    <div className="PopupText">
                        <h3 className='Name'> {selectedCharacter.name}</h3>
                        <p className='PopupP'> Watch the  <a href={selectedCharacter.episode}>Episode</a></p>
                        <p className='PopupP'>Gender:  <span>{selectedCharacter.gender}</span></p>
                        <p className='PopupP'>Species: <span>{selectedCharacter.species} </span></p>
                        <p className='PopupP'>Status: <span>{selectedCharacter.status}</span></p>

                        <div className="Buttons">
                            <button onClick={ClosePopup} className='CloseBtn'>Close</button>

                        </div>


                    </div>



                </div>)}
        </div>
    );
};

export default Characters;



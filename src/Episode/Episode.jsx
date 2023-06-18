import React, { useState, useEffect } from 'react';
import './Episode.css'




function Episodes() {
    const [episodes, setEpisodes] = useState([]);
    const [filter, setFilter] = useState('');
    const [page, setPage] = useState(1);









    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)

            .then(response => response.json())
            .then(data => {
                setEpisodes(data.results)



            }
            )
            .catch(error => console.error(error));
    }, [page]);

    const filteredEpisode = episodes.filter(episode =>
        episode.name.toLowerCase().includes(filter.toLowerCase())
    )
    function PrevPage() {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    function NextPage() {
        setPage(page + 1);
    }













    return (
        <div className="Episode" id='Episode'>
            <h1 className='TextH3'>Episodes</h1>
            <input
                type="text"
                placeholder="Filter by name"
                value={filter}
                onChange={event => setFilter(event.target.value)}
                className='Input EpisodeInput'


            />
            {filteredEpisode.length > 0 ? (

                <div className='Container' >








                    {
                        filteredEpisode.map(episode => (
                            <div className='EpisodeCard' key={episode.id} data-aos='fade-up'>

                                <p className='EpisodeName'> {episode.name}</p>
                                <div className='EpisodeText'>

                                    <p className='EpisodeCardTextP'> Air_date:<span className='EpisodeSpan'> {episode.air_date} </span></p>
                                    <p className='EpisodeCardTextP'>Name:  <span className='EpisodeSpan'>{episode.episode}</span> </p>



                                </div>





                            </div>


                        ))
                    }

                </div>

            ) : (
                <p className='no__cards'>No episodes found...</p>
            )}
            <div className="Pagination">
                <button onClick={PrevPage} disabled={page === 1} className='PagBtn'>Prev</button>
                <div className='pageCount'>{`Page ${page}`}</div>
                <button onClick={NextPage} disabled={page === 3} className="PagBtn">Next</button>

            </div>


        </div >












    );
}

export default Episodes;
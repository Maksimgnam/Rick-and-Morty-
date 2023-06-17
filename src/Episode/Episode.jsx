import React, { useState, useEffect } from 'react';
import './Episode.css'




function Episodes() {
    const [episodes, setEpisodes] = useState([]);
    const [filter, setFilter] = useState('');









    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode`)

            .then(response => response.json())
            .then(data => {
                setEpisodes(data.results)



            }
            )
            .catch(error => console.error(error));
    }, []);

    const filteredEpisode = episodes.filter(episode =>
        episode.name.toLowerCase().includes(filter.toLowerCase())
    )













    return (
        <div className="Episode">
            <h1 className='TextH3'>Episodes</h1>
            <input
                type="text"
                placeholder="Filter by name"
                value={filter}
                onChange={event => setFilter(event.target.value)}
                className='Input EpisodeInput'


            />


            <div className='Container' id='Episode'>








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
            )


        </div >












    );
}

export default Episodes;
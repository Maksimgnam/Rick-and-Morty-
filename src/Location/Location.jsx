import './Location.css';
import { useEffect } from 'react';
import { useState } from 'react';
import LocationFilter from '../LocationFilter/LocationFilter';
const Location = () => {

    const [locations, setLocations] = useState([]);

    const [filter, setFilter] = useState('');

    const [page, setPage] = useState(1)

    const [type, setType] = useState('');
    const [dimension, setDimension] = useState('');
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/location?page=${page}&type=${type}&dimension=${dimension}`)
            .then(response => response.json())
            .then(data => {
                setLocations(data.results)



            }
            )
            .catch(error => console.error(error));
    }, [page, type, dimension]);

    const filteredLocations = locations && locations.filter(location =>
        location.name.toLowerCase().includes(filter.toLowerCase())
    )

    function PrevPage() {
        if (page > 1)
            setPage(page - 1)
    }

    function NextPage() {
        setPage(page + 1)
    }
    const changeType = (slectedType) => {
        setType(slectedType)
    }
    const changeDimension = (slectedDimension) => {
        setDimension(slectedDimension)
    }
    return (
        <div className="Location" id='Location'>

            <h3 className='TextH3'>Locations</h3>
            <LocationFilter changeType={changeType} changeDimension={changeDimension} />


            <input
                type="text"
                placeholder="Write location"
                value={filter}
                onChange={event => setFilter(event.target.value)}
                className='Input'
            />
            {filteredLocations && filteredLocations.length > 0 ? (
                <div className="Container">


                    {
                        filteredLocations.map(locations => (
                            <div className="LocationCard" key={locations.id}>
                                <h3 className='LocationName'> {locations.name}</h3>
                                <div className='CardTextCont'>
                                    <p className='CardTextP'> type <span>{locations.type}: </span> </p>
                                    <p className='CardTextP'> dimension <span>:  {locations.dimension}</span></p>


                                </div>

                            </div>
                        ))
                    }
                </div>
            ) : (
                <p className='NoCardText'>No locations found...</p>
            )}
            <div className="Pagination">
                <button onClick={PrevPage} disabled={page === 1} className='PagBtn'>Prev</button>
                <div className='pageCount'>{`Page ${page}`}</div>
                <button onClick={NextPage} disabled={page === 7} className="PagBtn">Next</button>

            </div>




        </div>

    )
}
export default Location;
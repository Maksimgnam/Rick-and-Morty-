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

    const filteredLocations = locations.filter(location =>
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
        <div className="Location">

            <h3 className='TextH3'>Locations</h3>
            <Location changeType={changeType} changeDimension={changeDimension} />


            <input
                type="text"
                placeholder="Write location"
                value={filter}
                onChange={event => setFilter(event.target.value)}
                className='Input'
            />
            <div className="Container">

            </div>
            {
                filteredLocations.map(location => (
                    <div className="LocationCard" key={location.id}>
                        <h3 className='Name'> {location.name}</h3>
                        <div className='CardTextCont'>
                            <p className='CardTextP'> type <span>{location.type}: </span> </p>
                            <p className='CardTextP'> dimension <span>:  {location.dimension}</span></p>


                        </div>

                    </div>
                ))
            }



        </div>
    )
}
export default Location;
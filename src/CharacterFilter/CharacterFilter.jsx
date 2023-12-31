

import "./CharacterFilter.css";

const CharacterFilter = ({ changeGender, changeSpecies, changeStatus }) => {
    return (
        <div className="Filter">



            <select id="gender" name="gender" onChange={(e) => changeGender(e.target.value)}>
                <option value="" selected>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="genderless">Genderles</option>
                <option value="unknown">Unknown</option>

            </select>


            <select id="species" name="species" onChange={(e) => changeSpecies(e.target.value)}>
                <option value="" selected>Species</option>

                <option value="human">Human</option>
                <option value="alien">Alien</option>
                <option value="unknown">Unknown</option>
                <option value="animal">Animal</option>
                <option value="humanoid">Humanoid</option>
                <option value="mythological">Mythological</option>
                <option value="poopybutthole">Poopybutthole</option>
                <option value="disease">Disease</option>
                <option value="robot">Robot</option>
                <option value="cronenberg">Cronenberg</option>
                <option value="planet">Planet</option>

            </select>
            <select id="status" name="status" onChange={(e) => changeStatus(e.target.value)}>
                <option value="" selected>Status</option>
                <option value="Dead">Dead</option>
                <option value="alive">Alive</option>
                <option value="unknown">Unknown</option>

            </select>

        </div>
    )

}

export default CharacterFilter;
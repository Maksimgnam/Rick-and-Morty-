
import { useState } from 'react';
import './MyList.css';
import { useEffect } from 'react';

function MyList() {

    const [cards, setCards] = useState([]);
    const [selectValue, setSelectValue] = useState('');

    useEffect(() => {
        const storedCards = localStorage.getItem('cards');
        if (storedCards) {
            setCards(JSON.parse(storedCards));
        }
    }, []);

    ;
    const StorageChange = (updatedCards) => {
        localStorage.setItem('cards', JSON.stringify(updatedCards));
    };

    const Change = (e) => {
        setSelectValue(e.target.value);
    };

    const add = () => {
        if (selectValue !== '') {
            const newCards = [...cards, selectValue];
            setCards(newCards);
            setSelectValue('');
            StorageChange(newCards);

        }
    };

    const Delete = (index) => {
        const newCards = [...cards];
        newCards.splice(index, 1);
        setCards(newCards);

        StorageChange(newCards);
    };

    return (
        <div className='MyList' id='MyList'>
            <h3 className='TextH3'>My list</h3>

            <div className="InputCont" data-aos='fade-up'>
                <select value={selectValue} className='MyListSelect' onChange={Change}>
                    <option value="">Episode</option>
                    <option value="Pilot">Pilot</option>
                    <option value="Lawnmower Dog">Lawnmower Dog</option>
                    <option value="Anatomy Park">Anatomy Park</option>
                    <option value="M. Night Shaym-Aliens!">M. Night Shaym-Aliens!</option>
                    <option value="Meeseeks and Destroy">Meeseeks and Destroy</option>
                    <option value="Rick Potion #9">Rick Potion #9</option>
                    <option value="Raising Gazorpazorp">Raising Gazorpazorp</option>
                    <option value="Rixty Minutes">Rixty Minutes</option>
                    <option value="Something Ricked This Way Comes">Something Ricked This Way Comes</option>
                    <option value="Close Rick-counters of the Rick Kind">Close Rick-counters of the Rick Kind</option>
                    <option value="Ricksy Business">Ricksy Business</option>
                    <option value="A Rickle in Time">A Rickle in Time</option>
                    <option value="Mortynight Run">Mortynight Run</option>
                    <option value="Auto Erotic Assimilation">Auto Erotic Assimilation</option>
                    <option value="Total Rickall">Total Rickall</option>
                    <option value="Get Schwifty">Get Schwifty</option>
                    <option value="The Ricks Must Be Crazy">The Ricks Must Be Crazy</option>
                    <option value="Big Trouble in Little Sanchez">Big Trouble in Little Sanchez</option>
                    <option value="Interdimensional Cable 2: Tempting Fate">Interdimensional Cable 2: Tempting Fate</option>
                    <option value="Look Who's Purging Now">Look Who's Purging Now</option>
                    <option value="The Wedding Squanchers">The Wedding Squanchers</option>
                    <option value="The Rickshank Rickdemption">The Rickshank Rickdemption</option>
                    <option value="Rickmancing the Stone">Rickmancing the Stone</option>
                    <option value="Pickle Rick">Pickle Rick</option>
                    <option value="Vindicators 3: The Return of Worldender">Vindicators 3: The Return of Worldender</option>
                    <option value="The Whirly Dirly Conspiracy">The Whirly Dirly Conspiracy</option>
                    <option value="Rest and Ricklaxation">Rest and Ricklaxation</option>
                    <option value="The Ricklantis Mixup">The Ricklantis Mixup</option>
                    <option value="Morty's Mind Blowers">Morty's Mind Blowers</option>
                    <option value="The ABC's of Beth">The ABC's of Beth</option>
                    <option value="The Rickchurian Mortydate">The Rickchurian Mortydate</option>
                    <option value="Edge of Tomorty: Rick, Die, Rickpeat">Edge of Tomorty: Rick, Die, Rickpeat</option>
                    <option value="The Old Man and the Seat">The Old Man and the Seat</option>
                    <option value="One Crew Over the Crewcoo's Morty">One Crew Over the Crewcoo's Morty</option>
                    <option value="Claw and Hoarder: Special Ricktim's Morty">Claw and Hoarder: Special Ricktim's Morty</option>
                    <option value="Rattlestar Ricklactica">Rattlestar Ricklactica</option>
                    <option value="Never Ricking Morty">Never Ricking Morty</option>
                    <option value="Promortyus">Promortyus</option>
                    <option value="The Vat of Acid Episode">The Vat of Acid Episode</option>
                    <option value="Childrick of Mort">Childrick of Mort</option>
                    <option value="Star Mort: Rickturn of the Jerri">Star Mort: Rickturn of the Jerri</option>
                    <option value="Mort Dinner Rick Andre">Mort Dinner Rick Andre</option>
                    <option value="Mortyplicity">Mortyplicity</option>
                    <option value="A Rickconvenient Mort">A Rickconvenient Mort</option>
                    <option value="Rickdependence Spray">Rickdependence Spray</option>
                    <option value="Amortycan Grickfitti">Amortycan Grickfitti</option>
                    <option value="Rick & Morty's Thanksploitation Spectacular">Rick & Morty's Thanksploitation Spectacular</option>
                    <option value="Gotron Jerrysis Rickvangelion">Gotron Jerrysis Rickvangelion</option>
                    <option value="Rickternal Friendshine of the Spotless Mort">Rickternal Friendshine of the Spotless Mort</option>
                    <option value="Forgetting Sarick Mortshall">Forgetting Sarick Mortshall</option>
                    <option value="Rickmurai Jack">Rickmurai Jack</option>
                </select>



                {/* <input type="text" className='MylListInput' placeholder='Type episode name' value={text} onChange={(e) => setText(e.target.value)} /> */}
                <button className='add' onClick={add}>add</button>
            </div>

            <div className="MyListContainer" data-aos='fade-up'>
                {cards.map((card, index) => (
                    <div className='watchCard' key={index}>
                        <p className='watchName'>{card}</p>
                        <button className='delete' onClick={Delete}>delete</button>
                    </div>
                ))}

            </div>
        </div >
    )
}


export default MyList;

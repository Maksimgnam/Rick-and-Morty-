import './Header.css';

import menu from './HeaderImage/menu.png'





const Header = ({ OpenMenu }) => {
    return (
        <div className="Header">
            <div className="Logo">Rick and Morty</div>
            <div className="navbar">
                <a href="#Home">Home</a>
                <a href="#Character">Characters</a>
                <a href="#Episode">Episodes</a>
                <a href="#Location">Locations</a>
                <a href="#MyList">My List</a>

            </div>
            <div className="menu" onClick={OpenMenu}>
                <img src={menu} alt="" />
            </div>




        </div>
    )
}

export default Header;
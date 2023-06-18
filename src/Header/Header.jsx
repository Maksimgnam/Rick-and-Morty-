import './Header.css';





const Header = () => {
    return (
        <div className="Header">
            <div className="Logo">Rick and Morty</div>
            <div className="navbar">
                <a href="#Home">Home</a>
                <a href="#Character">Characters</a>
                <a href="#Episode">Episodes</a>
                <a href="#Location">Locations</a>
                <a href="">My List</a>

            </div>




        </div>
    )
}

export default Header;
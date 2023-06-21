import './MenuBar.css';
import Button from '@mui/material/Button';
const MenuBar = ({ CloseMenu }) => {
    const headerBtn = {
        height: '40px',
        width: '100px',
        background: 'green',
        position: 'relative',
        top: '10px',
        left: '20px',

        color: 'black'

    }
    return (

        <div className="MenuBar">
            <div className="MenuBarHead">
                <Button variant="contained" style={headerBtn} onClick={CloseMenu}>
                    Close
                </Button>


            </div>
            <div className="MenuLinksCont">
                <a href="#Home" className='MenuLinks' onClick={CloseMenu}>Home</a>
                <a href="#Character" className='MenuLinks' onClick={CloseMenu}>Characters</a>
                <a href="#Episode" className='MenuLinks' onClick={CloseMenu} >Episodes</a>
                <a href="#Location" className='MenuLinks' onClick={CloseMenu}>Locations</a>
                <a href="#MyList" className='MenuLinks' onClick={CloseMenu}>My List</a>

            </div>

        </div>
    )
}
export default MenuBar;
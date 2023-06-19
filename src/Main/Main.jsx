import './Main.css';
import { TypeAnimation } from 'react-type-animation';
import Button from '@mui/material/Button';
const Main = () => {
    const buttonStyle = {
        background: 'black',
        color: 'green',
        height: '60px',
        width: '300px',
        boxShadow: '0px 0 10px green',
        borderRadius: '10px',
        fontSize: '20px'
    }
    return (
        <div className="Main" id='Home'>
            <div className="MainTextContainer">

                <div className="MainDownCont">
                    <TypeAnimation
                        sequence={[

                            'Hi everyone',
                            1000,
                            'ITs Rick and Morty',
                            1500

                        ]}
                        wrapper="span"
                        speed={10}

                        repeat={Infinity}
                        className='AnimatedText'
                    />


                    <p className='MainP'>Rick and Morty is an American adult animated science-fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim. It is distributed internationally by Warner Bros. Television Distribution. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures that take place across an infinite number of realities, often travelling to other planets and dimensions</p>
                    <Button variant="contained" style={buttonStyle}>Get Started</Button>
                </div>

            </div>
            <div className="MainImageContainer">
                <img className='MainImage' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj7yqnckq8z8UFHD9l5TIGTw_VH10rPVbvcXeXSvCyhdRyFvt0JHyhDMyrKTgf3GRykAw&usqp=CAU" alt="" />

            </div>

        </div>
    )
}
export default Main;
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import youtuber, { prog, myName, myNames } from './youtuber';


// ReactDOM.render(<App />, document.getElementById("root"));

function Card(props) {
    console.log('props', props);
    return (
        <>
            <div className='cards'>
                <div className='card'>
                    <img src={props.imgsrc} alt='mypic' className='card_img' />
                    <div className='card_info'>
                        <span className='card_category'>{props.title} </span>
                        <h3 className='card_title'>{props.sname}</h3>
                        <a href={props.link} target='_blank'>
                            <button> Watch Now </button>
                        </a>
                    </div>
                </div>
            </div>
            <input type="text" value="see my videos" fn="fname" />
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <App />,
        <Card
            imgsrc='https://i.imgur.com/Y8WHhk2.jpg'
            title='A Netflix Original Series'
            sname='DARK'
            link='https://www.netflix.com/in/title/80100172'
        />
        <Card
            imgsrc='https://s3-us-west-2.amazonaws.com/s.cdpn.io/29841/dog.jpg'
            title='A Netflix Original Series'
            sname='Light DARK'
            link='https://www.netflix.com/in/title/80100172'
        />
        <ol>
            <li>Importance of Import Export In React</li>
            <li>{youtuber}</li>
            <li>{prog}</li>
            <li>{myName()}</li>
            <li>{myNames()}</li>
        </ol>
    </>
);
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';


const Arrow = ({Class, style}) => {
    return (
        <a style={{color : 'none'}} href='#header'>
            <div  style={style} className={Class}>
                <FontAwesomeIcon icon={faArrowDownLong}/>
            </div>
        </a>
    );
};

export default Arrow;
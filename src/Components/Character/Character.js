import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'
import './Character.css'


const Character = (props) => {
    const character = props.character
    const {firstName, lastName, age, family, title, imageUrl} = character
    const favouriteIcon = <FontAwesomeIcon icon={faCrown}></FontAwesomeIcon>

    return (
        <div className="character">
            <div className="imageContainer">
                <img src={imageUrl} alt="" />
            </div>
            <div className="characterDetails">
                <div className="infoDiv">
                    <h4>First Name: </h4>
                    <span className="info">{firstName}</span>
                </div>
                <div className="infoDiv">
                    <h4>Last Name: </h4>
                    <span className="info">{lastName}</span>
                </div>
                <div className="infoDiv">
                    <h4>Family: </h4>
                    <span className="info">{family}</span>
                </div>
                <div className="infoDiv">
                    <h4>Age: </h4>
                    <span className="info">{age}</span>
                </div>
                <div className="infoDiv">
                    <h4>Title: </h4>
                    <span className="info">{title}</span>
                </div>
                <div className="infoDiv">
                    <button onClick={()=> props.handleFavouriteButton(character)}> {favouriteIcon} Add to Favourite</button>
                </div>
            </div>
        </div>
    );
};

export default Character;
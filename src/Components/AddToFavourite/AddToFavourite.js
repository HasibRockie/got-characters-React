import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './AddToFavourite.css'

const AddToFavourite = (props) => {
    const favourites = props.favourites
    const personIcon =<FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
    let age = 0
    for(const favourite of favourites){
        age += favourite.age
    }
    return (
        <div>
            <h4>
               {personIcon} Marked As Favourite: {favourites.length}
            </h4>
            <hr />
            <h5>
                Total Age: {age}
            </h5>
            <hr />
            <div className="selected">
                {
                    favourites.map(favourite => <Selected
                        key ={favourite.id}
                        person = {favourite}
                    ></Selected>)
                }
            </div>
        </div>
    );
};

const Selected = (props) => {
    const {imageUrl, fullName} = props.person
    return(
        <div className='person'>
            <img alt='' src={imageUrl}></img>
            <h4>
                {fullName}
            </h4>
        </div>
    )
}

export default AddToFavourite;
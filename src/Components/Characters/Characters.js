import React, { useEffect, useState } from 'react';
import './Characters.css'
import Character from '../Character/Character';
import AddToFavourite from '../AddToFavourite/AddToFavourite';

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const [favourites, setFavourites] = useState([])
    useEffect(()=>{
        fetch("./Characters.json")
        .then(res => res.json())
        .then(data => setCharacters(data));
    },[])

    const handleFavouriteButton = (character) => {
        const newFavourites = [...favourites, character]
        setFavourites(newFavourites)
    }

    return (
        <div className="container">
            <div className="characters">
                {
                    characters.map(character => <Character 
                        key={character.id}
                        character={character}
                        handleFavouriteButton={handleFavouriteButton}
                    ></Character>)
                }
            </div>
            <div className="choose">
                <AddToFavourite
                    favourites={favourites}
                ></AddToFavourite>
            </div>
        </div>
    );
};

export default Characters;
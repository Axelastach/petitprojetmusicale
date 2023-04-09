import React from "react";
import './CardAlbum.scss';
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";





const ButtonFiltres = ({ genreMusical, index }) => {

    return (
        <div className="buttonFiltres">
            <div className="buttonFiltres-container">
                <button>{genreMusical}</button>
            </div>
        </div>
    )
}



// Création de la carte Artiste   

const ArtisteCard = ({ nom, genreMusical, albumLePlusConnu, photoAlbum, lienYoutube, index }) => {
    const [favori, setFavori] = useState(false);

    const toggleFavori = () => {

        setFavori(!favori);
    }

    const handleButtonClick = (lienYoutube) => {
        window.open(lienYoutube, '_blank');
    };

    return (
        <div className="artiste-card">
            <div className="artiste-card-image">
                <img src={photoAlbum} alt={albumLePlusConnu} />
            </div >
            <div className="artiste-card-details">
                <h3>{nom}</h3>
                <p>Genre musical: {genreMusical}</p>
                <p>Album le plus connu: {albumLePlusConnu}</p>
                <br />
                <span onClick={toggleFavori}>
                    {favori ? <FaHeart className="heart-filled" /> : <FaRegHeart className="heart-empty" />}

                </span>
                <span className="button-youtube">
                    <button onClick={() => handleButtonClick(lienYoutube)}>Play</button>
                </span>


            </div>


        </div>
    );
};



// Création de chaque carte Artiste    


const ArtistesList = ({ artistes }) => {

    return (
        <div className="artistes-list">
            <h2>Liste des artistes</h2>

            <div className="btn-fltr">
                {artistes.map((artiste, index) => (
                    <ButtonFiltres key={index} genreMusical={artiste.genreMusical} />
                ))}
            </div>


            <div className="artiste-cards">
                {artistes.map((artiste, index) => (
                    <ArtisteCard
                        key={index}
                        nom={artiste.nom}
                        genreMusical={artiste.genreMusical}
                        albumLePlusConnu={artiste.albumLePlusConnu}
                        photoAlbum={artiste.photoAlbum}
                        lienYoutube={artiste.lienYoutube}

                    />
                ))}
            </div>
        </div>
    );
};

export default ArtistesList;



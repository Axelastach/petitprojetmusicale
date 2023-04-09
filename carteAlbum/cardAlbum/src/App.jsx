import { useState } from 'react'
import CardAlbum from './components/CardAlbum'


import './App.css'
import './components/CardAlbum.scss'


const artistes = [
  {
    nom: "Adele",
    genreMusical: "Pop/Soul",
    albumLePlusConnu: "21",
    photoAlbum: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61jNfu1D+HL._SY355_.jpg",
    isFavorite: false,
    index:1,
    lienYoutube:"https://www.youtube.com/watch?v=UMtFjkaJ2VU&list=PLqC0BHAcW3Wev1d0r4d_c4mT3kEeL8xb-"
  },
  {
    index:2,
    nom: "Beyoncé",
    genreMusical: "R&B/Pop",
    albumLePlusConnu: "Lemonade",
    isFavorite: false,
    lienYoutube:"https://www.youtube.com/watch?v=rN-ElZwUADQ&list=PLZenj3su2HEp_MXS5LdptrNHRRcx4nRED",
    photoAlbum: "https://groundzero.fr/wp-content/uploads/2016/10/18591-BEYONCE-LEMONADE-LP.jpg"
  },
  {
    index:3,
    nom: "Drake",
    genreMusical: "Hip-hop/Rap",
    albumLePlusConnu: "Scorpion",
    isFavorite: false,
    lienYoutube:"https://www.youtube.com/watch?v=VtEBRE9ul90&list=PLnHe1KWzAptFfF5UTOSuZWsCI2EXz_PHF",
    photoAlbum: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41oGMw6H9IL.jpg"
  },
  {
    index:4,
    nom: "Ed Sheeran",
    genreMusical: "Pop/Folk",
    albumLePlusConnu: "÷ (Divide)",
    isFavorite: false,
    lienYoutube:"https://www.youtube.com/watch?v=OjGrcJ4lZCc&list=PLHxrmSem6NSrtmbg-98oGsJxtiCZxtouq",
    photoAlbum: "https://static.fnac-static.com/multimedia/Images/FR/NR/18/93/82/8557336/1507-1/tsp20170113092142/Divide.jpg"
  },
  {
    index:5,
    nom: "Kendrick Lamar",
    genreMusical: "Hip-hop/Rap",
    albumLePlusConnu: "DAMN.",
    isFavorite: false,
    lienYoutube:"https://www.youtube.com/watch?v=OjGrcJ4lZCc&list=PLHxrmSem6NSrtmbg-98oGsJxtiCZxtouq",
    photoAlbum: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41q3vSOVMSL._SY355_.jpg"
  },
  
  {
    index:6,
    nom: "Red Hot Chili Peppers",
    genreMusical: "Rock/Funk",
    albumLePlusConnu: "Californication",
    isFavorite: false,
    lienYoutube:"https://www.youtube.com/watch?v=iiupU-K_TKE&list=OLAK5uy_kEbANGGtoT4n87DQ3ESZyh3l9LK5uWII0",
    photoAlbum: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81TnWHafWdL._SY355_.jpg"
  },
  {
    index:7,
    nom: "Rihanna",
    genreMusical: "R&B/Pop",
    albumLePlusConnu: "Anti",
    isFavorite: false,
    lienYoutube:"https://www.youtube.com/watch?v=LhlCLARky1s&list=PLVP1nukhQ7IkYT9Juzxp5rHlLLPiXzMw8",
    photoAlbum: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61IeCixjIZL._SX466_.jpg"
  },
  {
    index:8,
    nom: "Taylor Swift",
    genreMusical: "Country/Pop",
    albumLePlusConnu: "1989",
    isFavorite: false,
    lienYoutube:"https://www.youtube.com/watch?v=RfjPHmgBPF0&list=PLc70MCJNmlIlTCG7GrWwltBI8DIAS5U_r",
    photoAlbum: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41DDvvI+lIL._SX425_.jpg"
  },
  {
    index:9,
    nom: "The Weeknd",
    genreMusical: "R&B/Pop",
    albumLePlusConnu: "Starboy",
    isFavorite: false,
    lienYoutube:"https://www.youtube.com/watch?v=3_g2un5M350&list=PLWGXKDxW301QZrzSl7hLzdYakFdayHC4l",
    photoAlbum: "https://cdn.cultura.com/cdn-cgi/image/width=768/media/pim/TITELIVE/1_0602557275926.jpg"
  }
];





function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      


      <CardAlbum  artistes={artistes}/>
     
    </div>
  )
}

export default App

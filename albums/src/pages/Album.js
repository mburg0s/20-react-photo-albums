import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

export default function Album() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/albums")
      .then((resp) => resp.json())
      .then((data) => {
        console.log("data", data);
        setAlbums(data);
      });
  }, []);
  return (
    <div className="mainContainer">
        <div className="myAlbumContainer">
            <h2>My Albums</h2>
        </div>

        <div className="albumContainer">
            {albums.map((item) => (
                // return( 
                    <li className = "listAlbum">
                        <Link to={`/album/${item.id}`} className = "linkAlbum">
                            <img src = {item.thumbnail} className = "imgMainPic" key={item.id} />
                            <p key={item.id} className = "mainAlbumName">{item.name}</p>
                        </Link> 
                    </li>
                // )
              ))}
    </div> 
  
    </div>
  );
}
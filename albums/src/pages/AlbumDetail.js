import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import ModalImage from "react-modal-image";

export default function AlbumDetail(props) {
    
    const [aDetail, setAlbumDetail] = useState([]);
    const [name,setAlbumName] = useState('')

    const fetchURL = `http://localhost:3001/albums/${props.match.params.id}`
    useEffect(() => {
        fetch(fetchURL)
        .then((resp) => resp.json())
        .then((detail) => {
          setAlbumDetail(detail.photos);
          setAlbumName(detail.name)
          console.log(detail.photos.url)
        });
    }, [props.match.params.id]);

    const [albums, setAlbums] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3001/albums")
        .then((resp) => resp.json())
        .then((data) => {
          setAlbums(data);
            // console.log(data.name, 'name')
            // console.log(data, 'data')
          
        });
    }, []);

    function showPic() { 
        console.log('hello')
        aDetail.filter((img) => {
            if (img.id === Number(props.match.params.id)) {
                console.log('hello again')

           return     <div> {img.photos} hello</div>
            }
    })
    }

    return (   

        <div className="detContainer">       
            <div className="h1Class">
                <h1>{name}</h1>
            </div>
            <div className="detailsContainer">
                <div className="listAName">
                    {albums.map((item) => (
                        <li key={item.id} className="listDetail">
                            <Link to={`/album/${item.id}`} 
                                className="linkAlbumName"
                            >
                                <p>{item.name}</p>
                            </Link> 
                        </li>
                ))}
                </div>
                <div className="detailPic">
                    {aDetail.map((photo) => (
                        //  return (
                        <div className="">
                            <li className="imgDetail" key={photo.id}>
                            {/* <img src={photo.thumbnail} className="imgPic popup" onClick={showPic} alt='show'/>
                            <span class="popuptext" id="myPopup">Popup text...</span> */}
                            <ModalImage 
                                small={photo.thumbnail}
                                large={photo.thumbnail} 
                                alt={photo.name}
                                className="imgPic"/>
                            <p className="nameDetail">{photo.name}</p> 

                            {/* <Link to={`/images/${photo.id}`} >
                                <img src={photo.thumbnail} className="imgPic"/>
                                <p className="nameDetail">{photo.name}</p> 
                               
                            </Link> */}
                            </li> 
                        </div>
                        // )
                    ))}
                </div>     
            </div>            
        </div> 

    )


}

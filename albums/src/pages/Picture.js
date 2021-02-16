
import { useState, useEffect } from "react";

export default function Picture(props){
    const [image,setImage] = useState([])

    const fetchURL = `http://localhost:3001/albums/${props.match.params.id}`
    console.log(fetchURL)
    useEffect(() => {
        fetch(fetchURL)
        .then((resp) => resp.json())
        .then((data) => {
          setImage(data.photos)
          console.log(data.photos)
          console.log(image,'image')
        });
    }, [props.match.params.id]);


return (
    
    <div>hello</div>
)
}
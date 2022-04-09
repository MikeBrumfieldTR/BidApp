import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import './art-work-list.css'

export default function ArtWorkList() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const url = "https://anectdk0df.execute-api.us-east-2.amazonaws.com"
    const navigate = useNavigate();
    const changeUrl = function(url) {
        navigate(url);
        // console.log('trigger')
    };
    
    useEffect(() => {
        fetch(`${url}/items`)
        .then(res => res.json())
        .then(
            (result) => {
            var x = result;
            console.log(JSON.stringify(x))
            setIsLoaded(true)
            setItems(x)
            },
            (error) => {
                setIsLoaded(true)
                setError(error)
            }
        )
    }, [])

    if(error) {
        return (
            <p style={{textAlign: "center"}}>
                Something Went Wrong
            </p>
        )
    }
    else if(isLoaded) {
        return (
            <div className="list-container">
                {items.map((artPiece) => (
                    <div className="art-list-item" key={artPiece.id.S}>
                        <p>{artPiece.item_name.S}</p>
                        <img className="art-image" src={artPiece.image_src.S}></img>
                        <button onClick={() => changeUrl(`/art/${artPiece.id.S}`)}><span id="button-txt">SEE DETAILS AND BID</span></button>
                    </div>
                ))}
            </div>
        )
    }
}
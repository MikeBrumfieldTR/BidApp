import Menu from "./menu/menu"
import { useEffect, useState } from 'react'
import './ArtWorkList/art-work-list.css'
import { useParams } from "react-router"
import './App.css'

export default function ArtDetail() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState(null);

    let {id} = useParams();
    const url = "https://anectdk0df.execute-api.us-east-2.amazonaws.com"  
    console.log(`id: ${id}`)

    useEffect(() => {
        fetch(`${url}/item/${id}`)
        .then(res => res.json())
        .then(
            (result) => {
            var x = result;
            console.log(`Item: ${JSON.stringify(x)}`)
            setIsLoaded(true)
            setItem(x)
            },
            (error) => {
                setIsLoaded(true)
                setError(error)
            }
        )
    }, [])

    const artPiece = {
        'item_name': 'Item3',
        'id': '123',
        'image_src': 'https://brumo-analytics-assets.s3.us-east-2.amazonaws.com/alex-lawrence-betting/image_2.jpg'
    }
    if(error) {
        return (
            <p style={{textAlign: "center"}}>
                Something Went Wrong
            </p>
        )
    }
    else if(isLoaded && item != null)
        return (
            <div>
                <header>
                    <Menu></Menu>
                </header>
                <div className="art-list-item" key={item.id.S}>
                    <p>{item.item_name.S}</p>
                    <img className="art-image" src={item.image_src.S}></img>
                    <div className="price">
                        <p>TOP BID:</p>
                        <p>$12.99</p>
                    </div>
                    <button ><span id="button-txt">SUBMIT BID</span></button>
                </div>
            </div>
        )
}
import {useParams, useNavigate} from "react-router-dom";
import { useState, useEffect } from 'react';
import  axios  from 'axios';

const api = "https://api.unsplash.com/photos";
const accessId = import.meta.env.VITE_APP_UNSPLASH_ACCESS;
// const accessId = process.env.REACT_APP_UNSPLASH_ACCESS;

const AlbumPhoto = () => {
    const navigate = useNavigate();
    // console.log("useParams:", useParams());
    const {id} = useParams();
    // console.log(id);

    const [photo, setPhoto] = useState({});

    useEffect(() => {
        (async() => {
            try {
                const res = await axios.get(`${api}/${id}?client_id=${accessId}`);
                // console.log("photo:", res.data);
                setPhoto(res.data);
            }catch(err) {
                console.log(err);
            }
        })()
    }, [id]);

    return (
        <div>
            <h4>AlbumPhoto</h4>
            This is a picture: {id}
            <p>{photo.description}</p>
            <img src={photo?.urls?.regular} alt="" width="200px"/>
            <br />
            <button type="button" className="btn mt-3" onClick={() => {navigate(-1)}}>Back</button>
        </div>
    )
}

export default AlbumPhoto
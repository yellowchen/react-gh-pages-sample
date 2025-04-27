import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom"
import axios from "axios";
import List from '../components/List';


const api = "https://api.unsplash.com/search/photos";
const accessId = import.meta.env.VITE_APP_UNSPLASH_ACCESS;
// const accessId = process.env.REACT_APP_UNSPLASH_ACCESS;

console.log(api, accessId);

const AlbumLayout = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        (async() => {
            //${api}  +  ?client_id  +  =${accessID}  +  &query  +  =office
			const res = await axios.get(`${api}?client_id=${accessId}&query=animal`);
            const {results} = res.data;
            // console.log(results);
            setList(results);
		})()
    }, [])

    return (
        <div className="row">
            <div className="col-4">
                Left Menu
                <p><Link to="search">Search</Link></p>
                <List list={list}/>
            </div>
            <div className="col-8">
                <Outlet context={list}/>
            </div>
        </div>
    )
}

export default AlbumLayout
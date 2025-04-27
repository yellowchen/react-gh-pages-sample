import { useState, useEffect } from 'react';
import axios from "axios";
import { useSearchParams } from 'react-router-dom';
import List from '../components/List';


const api = "https://api.unsplash.com/search/photos";
const accessId = import.meta.env.VITE_APP_UNSPLASH_ACCESS;
// const accessId = process.env.REACT_APP_UNSPLASH_ACCESS;

const AlbumSearch = () => {
    const [search, setSearch] = useState("");
    const [list, setList] = useState([]);
    
    const [searchParams, setSearchParams] = useSearchParams();
    // console.log("searchParams:", searchParams);

    //這邊的useEffect只是測試使用for網址參數
    // useEffect(() => {
    //     console.log(searchParams.get("query")); //get()裡面放要取得的參數，可以得到參數後面的值(ex. ?query=building，會得到building)
    //     setSearchParams({query: "building"})
    // }, [])

    useEffect(() => {
        if(search !== "") {
            (async () => {
				try {
					const res = await axios.get(`${api}?client_id=${accessId}&query=${search}`);
					// console.log("search.res:", res);
					const { results } = res.data;
					// console.log("results:", results);
					setList(results);
				} catch (err) {
					console.log(err);
				}
			})();
        }
    }, [search]);

    //當網址參數改變，就會把值寫入setSearch內
    useEffect(() => {
        setSearch(searchParams.get("query"));
    }, [searchParams])

    return (
		<div>
			<h4>AlbumSearch</h4>
			Search Page: {search}
			<input
				type='text'
				className='form-control'
				defaultValue={search}
				onKeyUp={(e) => {
					// console.log("search.e:", e);
					if (e.key === "Enter") {
						// setSearch(e.target.value);

						//這邊要改成，在input輸入文字後，也會直接寫入網址參數內
						setSearchParams({ query: e.target.value });
					}
				}}
			/>
			<h4>Search Result:</h4>
			<List list={list} />
		</div>
	);
}

export default AlbumSearch
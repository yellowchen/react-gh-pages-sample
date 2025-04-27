import { Link } from 'react-router-dom';


const List = ({list}) => {
	console.log(list);
    return (
		<>
			{list.map((item) => (
				<div key={item.id}>
					<Link to={`/album/${item.id}`}>{item.alt_description}</Link>
				</div>
			))}
		</>
	);
}

export default List;
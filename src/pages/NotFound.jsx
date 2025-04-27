import {useEffect} from "react";
import {useNavigate} from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 5000);
    }, [navigate])

    return (
        <div>
            NotFound
        </div>
    )
}

export default NotFound
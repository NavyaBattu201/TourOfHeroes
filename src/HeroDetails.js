import { useParams, useHistory } from "react-router-dom";
import { useEffect} from "react";
import useFetch from "./useFetch";
const HeroDetails = () => {
    const { id } = useParams();
    const history = useHistory();
    const { info, isPending, error } = useFetch('http://localhost:8000/heros/' + id);
    useEffect(() => {
        console.log(info);
    }
    , [info]);
    const updateHeroName = async (heroName) => {
        try {
            const response = await fetch(`http://localhost:8000/heros/` + id, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: heroName }),
            });

            if (!response.ok) {
                throw new Error('Failed to update hero name');
            }
        } catch (error) {
            console.error(error.message);
        }
    };
    const handleInputChange = (e) => {
        console.log(e.target.value);
        updateHeroName(e.target.value);
    };
    return (
        <div>
            {isPending && <div>loading...</div>}
            {error && <div>{error}</div>}
            {info && (
                <div className="hero-details">
                    <h2>{info.name} Details</h2>
                    <div className="hero-content">
                        <p>Id:{id}</p>
                        <form>
                            <label>Hero name:</label>
                            <input
                                type="text"
                                placeholder={info.name}
                                onChange={handleInputChange}
                            />
                        </form>
                    </div>
                    <br />
                    <button
                        className="button"
                        onClick={() => history.go(-1)}>
                        Back</button>
                </div>
            )}
        </div>
    );
}
export default HeroDetails;
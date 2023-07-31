import { Link } from 'react-router-dom';
const HeroesList = ({ heroes }) => {
    return (
        <div className="heroslist">
            <div className="herobox">
                {heroes.map(item => (
                    <div key={item.id}>
                        <p>
                            <Link to={`/hero/${item.id}`}>{item.id}: {item.name}</Link>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HeroesList;
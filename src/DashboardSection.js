import HeroesList from './HeroesList';
import useFetch from './useFetch';

const DashboardSection = () => {
    const {info,isPending,error}=useFetch('http://localhost:8000/heros')
    const firstFourHeroes = info ? info.slice(0, 4) : []; 
    return (
        <div className="herosection">
            <h2>DashBoard</h2>
            {error && <div className='message'>{error}</div>}
            {isPending && <div className='message'>loading...</div>}
            {info && <HeroesList heroes={firstFourHeroes} />}
        </div>
    );
}

export default DashboardSection;
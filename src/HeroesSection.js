import HeroesList from './HeroesList';
import useFetch from './useFetch';

const HeroesSection = () => {
    const {info,isPending,error}=useFetch('http://localhost:8000/heros')
    return (
        <div className="herosection">
            <h2>Myheroes</h2>
            {error && <div className='message'>{error}</div>}
            {isPending && <div className='message'>loading...</div>}
            {info && <HeroesList heroes={info} />}
        </div>
    );
}

export default HeroesSection;
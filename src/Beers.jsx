import { useGlobalContext } from './Context'

const Beers = () => {
    const {isLoading, beers, apiFail} = useGlobalContext();

    if(isLoading & !apiFail){
        return <div className="loading"></div>
    } else if (apiFail) {
        return <div>oops somethings went wrong!</div>
    }

    return <section className='beers'>
        {beers.map((beer)=>{
            const {id, name, abv, ingredients: { malt }, volume: { value, unit } } = beer
            let maltIterations = Math.min(malt.length, 3);
            var malts = [];
            for(var i = 0; i<maltIterations; i++) {
                malts.push(malt[i].name)
            }
            return <article key={id} className='beer'>
                <p className='title'>{name}</p>
                <p className='ingredients'>
                    malts: {malts.join(', ').toString() + '...'}
                </p>
                <p className='info'>
                    abv: {abv}<span>% | {value} {unit}</span>
                </p>
            </article>
        })}
    </section>
}

export default Beers
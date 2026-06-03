import './Grid.css'
import Card from './Card'
import data from '../data.json'

function Grid() {
    return (
        <div className='products-grid'>
            {data.map((item) => (
                <Card key={item.id} product={item} />
            ))}

        </div>
    )
}
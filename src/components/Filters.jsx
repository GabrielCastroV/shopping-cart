import { useId } from 'react'
import '../styles/filters.css'
import { useFilters } from '../hooks/useFilters';

// eslint-disable-next-line react/prop-types
export const Filters = () => {
    const { filters, setFilters } = useFilters()

    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    const handleRangePrice = (e) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }
    const handleChangeCategory = (e) => {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }

  return (
    <section className="filters">
        <div>
            <label htmlFor={minPriceFilterId}>Min. price</label>
            <input type="range" id={minPriceFilterId} min='0' max='1500' value={filters.minPrice}
            onChange={handleRangePrice}
            />
            <span style={{fontSize: '14px', fontWeight: 'lighter'}}>${filters.minPrice}</span>
        </div>
        <div>
            <label htmlFor={categoryFilterId}>Category</label>
            <select id={categoryFilterId} onChange={handleChangeCategory}>
                <option value="all">All</option>
                <option value="laptops">Laptops</option>
                <option value="smartphones">Smartphones</option>
            </select>
        </div>
    </section>
  )
}

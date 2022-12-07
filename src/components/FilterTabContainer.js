import removeTabImg from "../assets/images/icon-remove.svg"

const FilterTabContainer = ({ filters, removeFilterItem, clearFilter }) => {


    return (
        <div className="filter-display-container">
            <div className="filter-col">
                {filters.map((item) => {
                    return (
                        <div className="filter-tab" key= {Object.values(item)}>
                            <h3>{Object.values(item)}</h3>
                            <img src={removeTabImg} alt="remove filter" onClick={removeFilterItem({item})} />
                        </div>
                    )
                })}
            </div>
            <div className="filter-col">
                <button className="clear" onClick={clearFilter}>Clear</button>
            </div>
        </div>
    )

}

export default FilterTabContainer
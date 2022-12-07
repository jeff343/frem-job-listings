import removeTabImg from "../assets/images/icon-remove.svg"

const FilterTabContainer = ({ filters, removeFilterItem, clearFilter }) => {


    return (
        <div className="filter-display-container">
            <div className="filter-col">
                {filters.map((item) => {
                    return (
                        <div className="filter-tab" key= {Object.values(item)}>
                            <span className="filter-item">{Object.values(item)}</span>
                            <button className="remove-btn" onClick={removeFilterItem({item})}>
                                <img src={removeTabImg} alt="remove filter"  />
                            </button>
                        </div>
                    )
                })}
            </div>
            <div className="filter-col">
                <button className="clear-btn" onClick={clearFilter}>Clear</button>
            </div>
        </div>
    )

}

export default FilterTabContainer
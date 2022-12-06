import removeTabImg from "../assets/images/icon-remove.svg"

const FilterTabContainer = ({ filters, removeFilterItem }) => {


    return (
        <div className="filter-tab-container">
            {filters.map((item) => {
                return (
                    <div className="filter-tab" key= {Object.values(item)}>
                        <h3>{Object.values(item)}</h3>
                        <img src={removeTabImg} alt="remove filter" onClick={removeFilterItem({item})} />
                    </div>
                )
            })}
        </div>
    )

}

export default FilterTabContainer
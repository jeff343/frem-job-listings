import removeTabImg from "../assets/images/icon-remove.svg"

const FilterTabContainer = ({ filters }) => {


    return (
        <div className="filter-tab-container">
            {filters.map((item) => {
                return (
                    // todo add removeFilterItem
                    <div className="filter-tab" key= {item}>
                        <h3>{item}</h3>
                        <img src={removeTabImg} alt="remove filter" />
                    </div>
                )
            })}
        </div>
    )

}

export default FilterTabContainer
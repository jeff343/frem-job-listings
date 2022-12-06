const JobFilter = ({ job }) => {

    const { languages, tools, role, level} = job


    return (
        <div className="desc-col">
            <div className = "filter-container">
                <button className="filter-btn" >{role}</button>
                <button className="filter-btn">{level}</button>
                {languages.map((x) => {
                    return (
                        <button className="filter-btn" key={x}>{x}</button>
                    )
                })}
                {tools.map((x) => {
                    return (
                        <button className="filter-btn" key={x}>{x}</button>
                    )
                })}
            </div>
        </div>
    )
}

export default JobFilter
const JobFilter = ({ job, addFilterItem }) => {

    const { languages, tools, role, level } = job


    return (
        <div className="desc-col">
            <div className = "filter-container">
                <button className="filter-btn" onClick={addFilterItem({role})}>{role}</button>
                <button className="filter-btn" onClick={addFilterItem({level})}>{level}</button>
                {languages.map((lang) => {
                    return (
                        <button className="filter-btn" key={lang} onClick={addFilterItem({lang})}>{lang}</button>
                    )
                })}
                {tools.map((tool) => {
                    return (
                        <button className="filter-btn" key={tool} onClick={addFilterItem({tool})}>{tool}</button>
                    )
                })}
            </div>
        </div>
    )
}

export default JobFilter
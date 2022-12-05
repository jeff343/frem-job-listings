const JobLanguage = ({ job }) => {
    const { languages } = job

    return (
        <div className = "languages-container">
            {languages.map((x) => {
                return (
                    <button className="language-btn">{x}</button>
                )
            })}
        </div>
    )
}

export default JobLanguage
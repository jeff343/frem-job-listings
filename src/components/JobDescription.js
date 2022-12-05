const JobDescription = ({ job }) => {

    const { logo, company, featured, position, postedAt, contract, languages, tools } = job
    const newJob = job["new"]
    const jobLocation = job["location"]

    return(
        <div className={"description-container "+ (featured ? "featured" : "") }>
            <div className="desc-col">
                <div className="desc-img">
                    <img src={logo} alt="company logo" />
                </div>
                <div className="desc-text">
                    <div className="desc-row">
                        <h3 className="company" >{company}</h3>
                        {newJob && <span className="new-tag">NEW!</span>}
                        {featured && <span className="feat-tag">FEATURED</span>}
                    </div>
                    <div className="desc-row">
                        <h2 className="position">{position}</h2>
                    </div>
                    <div className="desc-row">
                        <span className="desc-bullets">
                            {postedAt} &#8226; {contract} &#8226; {jobLocation} 
                        </span>
                    </div>
                </div>
            </div>
            <div className="desc-col">
                <div className = "languages-container">
                    {languages.map((x) => {
                        return (
                            <button className="language-btn" key={x}>{x}</button>
                        )
                    })}
                    {tools.map((x) => {
                        return (
                            <button className="language-btn" key={x}>{x}</button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default JobDescription
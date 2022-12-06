const JobDescription = ({ job }) => {

    const { logo, company, featured, position, postedAt, contract } = job
    const newJob = job["new"]
    const jobLocation = job["location"]

    return(
        <div className= "desc-col">
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
    )
}

export default JobDescription
const JobDescription = ({ job }) => {

    const { logo, company, featured, position, postedAt, contract } = job
    const newJob = job["new"]
    const jobLocation = job["location"]

    return(
        <div className="description-contiainer">
            <div className="desc-img">
                <img src={logo} alt="company logo" />
            </div>
            <div className="desc-text">
                <div className="desc-row">
                    <h2>{company}</h2>
                    {newJob && <span className="new-tag">New!</span>}
                    {featured && <span className="feat-tag">Featured</span>}
                </div>
                <div className="desc-row">
                    <h3>{position}</h3>
                </div>
                <div className="desc-row">
                    {postedAt} &#8226; {contract} &#8226; {jobLocation}
                </div>
            </div>
        </div>
    )
}

export default JobDescription
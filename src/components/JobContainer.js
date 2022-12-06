import { jobs } from "../assets/shared/data.js"
import JobDescription from "./JobDescription"
import JobFilter from "./JobFilter.js"
import "./JobContainer.css"


const JobContainer = () => {
    return (
        <div className="listings-container">
            {jobs.map((job) => {
                return (
                <div className={"description-container " + (job["featured"] ? "featured" : "")}>
                    <JobDescription job={job} key={job["id"]} />
                    <JobFilter job={job} key={job["id"] + 10} />
                </div>
                )
            })}
        </div>
    )
}

export default JobContainer
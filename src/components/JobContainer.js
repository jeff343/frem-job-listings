import { jobs } from "../assets/shared/data.js"
import JobDescription from "./JobDescription"
import "./JobContainer.css"


const JobContainer = () => {
    return (
        <div className="listings-container">
            {jobs.map((job) => {
                return (
                    <JobDescription job={job} key={job["id"]} />
                )
            })}
        </div>
    )
}

export default JobContainer
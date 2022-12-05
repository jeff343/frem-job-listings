import { jobs } from "../assets/shared/data.js"
import JobDescription from "./JobDescription"
import JobLanguage from "./JobLanguage.js"


const JobContainer = () => {
    return (
        <>
            {jobs.map((job) => {
                return (
                    <>
                        <JobDescription job={job} key={job.id} />
                        <JobLanguage job={job} key={job.id} />
                    </>
                )
            })}
        </>
    )
}

export default JobContainer
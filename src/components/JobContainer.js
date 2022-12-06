import { jobs } from "../assets/shared/data.js"
import { useState } from "react"
import JobDescription from "./JobDescription"
import JobFilter from "./JobFilter.js"
import "./JobContainer.css"

const JobContainer = () => {

    const [filterArr, setFilterArr] = useState([])

    const addFilterItem = (item) => ()  => {
        if (!filterArr.includes(Object.values(item)[0])) {
            setFilterArr(filterArr =>[...filterArr, Object.values(item)[0]])
        } 
        console.log(filterArr)
    }

    return (
        <div className="listings-container">
            {jobs.map((job) => {
                return (
                <div className={"description-container " + (job["featured"] ? "featured" : "")}>
                    <JobDescription job={job} key={job["id"]} />
                    <JobFilter job={job} key={job["id"] + 10} addFilterItem={addFilterItem} />
                </div>
                )
            })}
        </div>
    )
}

export default JobContainer
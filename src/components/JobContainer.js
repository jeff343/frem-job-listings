import { jobs } from "../assets/shared/data.js"
import { useState } from "react"
import JobDescription from "./JobDescription"
import JobFilter from "./JobFilter.js"
import FilterTabContainer from "./FilterTabContainer.js"
import "./JobContainer.css"

const JobContainer = () => {

    const [filterArr, setFilterArr] = useState([])

    const addFilterItem = (item) => ()  => {
        if (!filterArr.includes(Object.values(item)[0])) {
            setFilterArr(filterArr =>[...filterArr, Object.values(item)[0]])
        } 
    }

    const removeFilterItem = (item) => () => {
        setFilterArr(filterArr.filter((i) => i !== Object.values(item)[0]))
    }

    const clearFilter = () => {
        setFilterArr([])
    }

    const filteredJobs = (job) => {
        if (filterArr === 0) {
            return job
        } else {
            const jobValues = Object.values(job).flat()
            if (filterArr.every((item) => jobValues.includes(item))) {
                return job
            }
        }
    }

    return (
        <div className="listings-container">
            {filterArr.length > 0 && <FilterTabContainer filters={filterArr} removeFilterItem={removeFilterItem} clearFilter={clearFilter} />}
                {jobs.filter((job) => filteredJobs(job)).map((j) => {
                    return (
                        <div className={"description-container " + (j["featured"] ? "featured" : "")} key={j["id"]} >
                            <JobDescription job={j} />
                            <JobFilter job={j} addFilterItem={addFilterItem} />
                        </div>
                    )
                })}  
        </div>
    )
}

export default JobContainer
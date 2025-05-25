import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CareerSearchResult.css";

const jobs = [
  {
    id: 1,
    title: "Product Designer",
    company: "Nomad",
    location: "Paris, France",
    tags: ["Full Time-", "Marketing-", "Design"],
    applied: 5,
    capacity: 10,
  },
  {
    id: 2,
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Francisco, USA",
    tags: ["Full Time-", "Marketing", "Design"],
    applied: 2,
    capacity: 10,
  },
  {
    id: 3,
    title: "Interactive Developer",
    company: "Terraform",
    location: "Hamburg, Germany",
    tags: ["Full Time", "Marketing", "Design"],
    applied: 8,
    capacity: 10,
  },
  {
    id: 4,
    title: "Interactive Developer",
    company: "Terraform",
    location: "Hamburg, Germany",
    tags: ["Full Time", "Marketing", "Design"],
    applied: 8,
    capacity: 10,
  },
  {
    id: 5,
    title: "Interactive Developer",
    company: "Terraform",
    location: "Hamburg, Germany",
    tags: ["Full Time", "Marketing", "Design"],
    applied: 8,
    capacity: 10,
  },
  {
    id: 6,
    title: "Interactive Developer",
    company: "Terraform",
    location: "Hamburg, Germany",
    tags: ["Full Time", "Marketing", "Design"],
    applied: 8,
    capacity: 10,
  },
  {
    id: 7,
    title: "Interactive Developer",
    company: "Terraform",
    location: "Hamburg, Germany",
    tags: ["Full Time", "Marketing", "Design"],
    applied: 8,
    capacity: 10,
  },
  {
    id: 8,
    title: "Interactive Developer",
    company: "Terraform",
    location: "Hamburg, Germany",
    tags: ["Full Time", "Marketing", "Design"],
    applied: 8,
    capacity: 10,
  },
  {
    id: 9,
    title: "Interactive Developer",
    company: "Terraform",
    location: "Hamburg, Germany",
    tags: ["Full Time", "Marketing", "Design"],
    applied: 8,
    capacity: 10,
  },
  {
    id: 10,
    title: "Interactive Developer",
    company: "Terraform",
    location: "Hamburg, Germany",
    tags: ["Full Time", "Marketing", "Design"],
    applied: 8,
    capacity: 10,
  },
  // Other jobs...
];

const filters = {
  employment: ["Full-time", "Part-time", "Remote", "Internship", "Contract"],
  categories: ["Design", "Sales", "Marketing", "Business", "HR", "Engineering"],
  jobLevel: ["Entry Level", "Mid Level", "Senior Level", "Director", "VP"],
  salary: ["$500 - $1000", "$1000 - $1500", "$1500 - $2000", "$3000+"],
};

const CareerSearchResult = ({ jobTitle, location }) => {
  const [sort, setSort] = useState("Most relevant");
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5; // Number of jobs to display per page

  // Ensure jobTitle and location are always strings
  const normalizedJobTitle = jobTitle ? jobTitle.toLowerCase() : "";
  const normalizedLocation = location ? location.toLowerCase() : "";

  // Filter jobs based on the job title and location input
  const filteredJobs = jobs.filter((job) => {
    const titleMatch = job.title.toLowerCase().includes(normalizedJobTitle);
    const locationMatch = job.location.toLowerCase().includes(normalizedLocation);
    return titleMatch && locationMatch;
  });

  // Sort the jobs based on selected option
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (sort === "Newest") {
      // Assuming the "newest" is based on the job's ID
      return b.id - a.id;
    }
    return 0; // Default sorting (Most relevant is not doing anything specific right now)
  });

  // Calculate the index of the first job to display on the current page
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;

  // Get the jobs for the current page
  const currentJobs = sortedJobs.slice(indexOfFirstJob, indexOfLastJob);

  // Calculate the total number of pages
  const totalPages = Math.ceil(sortedJobs.length / jobsPerPage);

  // Handle page navigation
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="jobresult-board">
      {/* Sidebar Filters */}
      <aside className="jobresultsidebar">
        <h3>Type of Employment</h3>
        {filters.employment.map((type) => (
          <label key={type}>
            <input type="checkbox" />
            {type}
          </label>
        ))}

        <h3>Categories</h3>
        {filters.categories.map((category) => (
          <label key={category}>
            <input type="checkbox" />
            {category}
          </label>
        ))}

        <h3>Job Level</h3>
        {filters.jobLevel.map((level) => (
          <label key={level}>
            <input type="checkbox" />
            {level}
          </label>
        ))}

      </aside>

      {/* Job List */}
      <main className="jobresult-list">
        <div className="jobresult-list-header">
          <h2>All Available Jobs</h2>
          <span>We have {sortedJobs.length} results for you</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="jobresultsort-dropdown"
          >
            <option value="Most relevant">Most relevant</option>
            <option value="Newest">Newest</option>
          </select>
        </div>

        {currentJobs.length > 0 ? (
          currentJobs.map((job) => (
            <div key={job.id} className="jobresult-card">
              <div className="jobresultjob-info">
                <h3>{job.title}</h3>
                <p>
                  {job.company} - {job.location}
                </p>
                <div className="jobresulttags">
                  {job.tags.map((tag, index) => (
                    <span key={index} className="jobresulttag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="jobresult-apply">
                <Link to={`/Jobapply/${job.id}`} className="apply-button">
                  Apply
                </Link>
                <div className="jobresultcapacity-status">
                  <span>
                    {job.applied} applied of {job.capacity} capacity
                  </span>
                  <div className="jobresultprogress-bar">
                    <div
                      className="jobresultprogress"
                      style={{
                        width: `${(job.applied / job.capacity) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No jobs found for your search!</p>
        )}

        {/* Pagination Controls */}
        <div className="careerpagepagination-controls">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <i class='fas fa-angle-left'></i> Prev
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next <i class='fas fa-angle-right'></i>
          </button>
        </div>
      </main>
    </div>
  );
};

export default CareerSearchResult;

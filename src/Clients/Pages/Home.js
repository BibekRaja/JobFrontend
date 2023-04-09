import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {
    const [Jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get("https://job-api-eosin.vercel.app/api/jobs").then(res => {
            console.log(res);
            setJobs(res.data.data)
        }).catch(err => {

        })
    }, []);


    return (
        <div className='flex'>
            {
                Jobs.map(job => {
                    return <div className='p-4' key={job._id}>

                        <div className="card" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <img src={`${job.images[0]}`} alt="job" />
                                <h5 className="card-title">{job.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{job.offered_salary}</h6>
                                <p className="card-text">{job.description}</p>
                                <p className="card-text">{job.created_by.name}</p>
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>
                    </div>
                })
            }

        </div>
    );
}

export default Home;

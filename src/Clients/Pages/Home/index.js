import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Jobcards from '../../Component/Jobcards';

const Home = () => {
    const [Jobs, setJobs] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        axios.get("https://job-api-eosin.vercel.app/api/jobs").then(res => {
            console.log(res);
            setisLoading(false)
            setJobs(res.data.data)
        }).catch(err => {

        })
    }, []);


    return (
        <div className='container d-flex row'>
            {
                isLoading
                &&
                <h1>Loading....</h1>

            }
            {
                Jobs.map(job => {
                    return <Jobcards job={job} />
                })
            }

        </div >
    );
}

export default Home;

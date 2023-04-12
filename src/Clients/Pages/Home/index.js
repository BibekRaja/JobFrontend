import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Jobcards from '../../Component/Jobcards';

const Home = ({ search_term }) => {
    const [Jobs, setJobs] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    // const [search_term, setSearchTerm] = useState("");

    useEffect(() => {
        axios.get(` ${process.env.REACT_APP_SERVER_DOMAIN}jobs?search_term=${search_term}`).then(res => {
            console.log(res);
            setisLoading(false)
            setJobs(res.data.data)
        }).catch(err => {

        })
    }, [search_term]);


    return (
        <div className='container d-flex row'>
            {
                isLoading
                &&
                <h1>Loading....</h1>

            }
            {/* <input value={search_term} onChange={(e) => { setSearchTerm(e.target.value) }} /> */}
            {
                Jobs.map(job => {
                    return <Jobcards job={job} />
                })
            }

        </div >
    );
}

export default Home;

import React from 'react';
import NoImage from '../../../public/image/no-image.webp'
const Jobcards = (props) => {
    return (
        <div className='p-2 col-md-3' key={props.job._id}>
            < div className="card" style={{ width: "19rem", height: "15rem" }}>
                <div className="card-body">
                    <img src={`${props.job.images[0] || NoImage}`} alt="jobimage" style={{ width: "50px", height: "50px" }} />
                    <h5 className="card-title">{props.job.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.job.categories}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">{props.job.created_by.name}</h6>
                    <p className="card-text ">{props.job.description}</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div >

        </div >
    );
}

export default Jobcards;

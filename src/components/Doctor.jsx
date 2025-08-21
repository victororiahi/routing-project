import React from 'react'
import { useState, useEffect } from 'react'
import axios from '../api/http'
import '../css/Doctors.css'

const Doctor = ({doctorId}) => {
        const [doctor, setDoctor] = useState({});
    useEffect(() => {
 axios.get('/api/Doctors/get-doctor-profile-by-id?id=' + doctorId)
    .then((response) => {setDoctor(response.data.data); console.log('id: '+doctorId); console.log(response.data.data);    })
    .catch(error => console.error('Error fetching doctors:', error));
    },[]);
  return (
      <div className='doctor-card' key={doctor.id}>
                <div className="doctor-header">
                   <div className="doctor-author-avatar">
                      <img src={doctor.profileImage || 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHSLV3XiY_tKkB1BJ7GA7pqVm8ZFSTWzRtGs2BiiU3mARaM1BZMRTbLbXwS-hoH2KKd5Oonq7xW0vXjH8zBdOFWTNJ0r3KaVF1prkd6uSLFFMneOUIyObNqV_6OdqhQSafnwr722HBf5vjJc4NOER34YEhHxYKfu3KvbWthz4tqsrhBpQH7198aVZ65hJn_dKS2gG3nPr3SPh6DMo696CLBT00KEnnBfRStJ2oE0bGF0cEZnKgVv-5glQhlDnXFYmcKd-3czY5EdM' } alt="author image" />
                   </div>
                    <div className="doctor-info">
                        <p className="author-name">
                            {doctor.fullName || "Unknown Doctor"}
                        </p>
                        
                        <div  className="doctor-date-time">
                        {doctor.specialty || "Specialty not specified"}
                        </div> 
                        &nbsp; &nbsp;
                        <div  className="doctor-date-time">
                            {doctor.experienceYears ? `${doctor.experienceYears} years of experience` : "Experience not specified"}
                        </div>                        
                    </div>
                </div>

                    {/* <div className='image-wrapper'>
                     <img src={doctor.doctorImage} alt={doctor.doctorTitle || "doctor image"} />
                    </div> */}
                <div className="doctor-info">
                              {/* <h3>{doctor.doctorTitle || "Untitled"}</h3> */}
                      <p>{doctor.about} </p>
                      <span onClick={() => {navigate('/doctors/'+doctor.id)}} style={{fontWeight:'bold', color:'green'}} >Read More...</span>
                 </div>
            <div>
              <p className="doctor-workinghours"><strong>Working Hours:</strong> {doctor.workingHours || "No contact info available"}</p>
            
            </div>
          </div>
  )
}

export default Doctor
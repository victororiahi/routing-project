import React, { use } from 'react'
import {useState, useEffect} from 'react'
import axios from '../api/http'
import '../css/Doctors.css'
import { Link } from 'react-router-dom'

const Doctors = () => {
    const[doctors, setDoctors] = useState([]);
    useEffect(() => {
           axios.get('/api/Doctors/doctor-profiles')
    .then((response) => {setDoctors(response.data.data)})
    .catch(error => console.error('Error fetching doctors:', error));

    console.log("Doctors fetched:", doctors);
    },[]);
 
  return (
  <>
   <div className='doctors-container'>
    {doctors.length && doctors.map((doctor) => {
      return (
   <Link className="no-underline" to={"/doctors/" + doctor.id} key={doctor.id}>
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
              <p className="doctor-availabledays"><strong>Available Days:</strong> {doctor.availableDays.map((days, id) => {return (<span key={id}><span> {days.day}</span> <span>{days.date}</span><span>|</span></span> )})}</p>
            </div>
          </div>
    </Link>
          )})
       
    
    }
   </div>
  </>
  )
}

export default Doctors
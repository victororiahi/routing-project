import React from 'react'
import { useParams } from 'react-router-dom'
import Doctor from '../components/Doctor'

const DoctorPage = () => {
    const { id } = useParams();
  return (
    <>
      <Doctor doctorId={id}/>
      
    </>
  )
}

export default DoctorPage
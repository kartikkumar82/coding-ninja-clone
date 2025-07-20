import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Courses from '../Pages/Courses'
import Dashboard from '../Components/Dashboard'
import UserDetail from '../Components/UserDetail'
import AlumniComp from '../Components/AlumniComp'
import CourseDesc from '../Components/CourseDesc'
import OnBoarding from '../Pages/OnBoarding'

const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/courses" element={<Courses/>} />
      <Route path="/courses/:id" element={<CourseDesc/>} />
      <Route path="/alumni" element={<AlumniComp/>} />
      <Route path="/dashboard/:userId" element={<Dashboard/>} />
        <Route path="/user/:userId" element={<UserDetail/>} />       
      <Route path="/onboarding" element={<OnBoarding/>} />
    </Routes>
  )
}

export default RouteComponent

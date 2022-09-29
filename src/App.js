import React from 'react'
import { Switch, Route, Link, Routes } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import { Navbar, Exchanges, Homepage, Currencies, Details, News } from './components'
import './app.css'

export default function App() {
  return (
    <div className='app'>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
           <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/exchanges" element={<Exchanges/>}/>
            <Route path="/currencies " element={<Currencies/>}/>
            <Route path="/currencies/:coinId " element={<Details/>}/>
            <Route path="/news" element={<News/>}/>
           </Routes>
          </div>
        </Layout>
      </div>
      <div className="footer">
        
      </div>
    </div>
  )
}

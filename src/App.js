import React from 'react'
import { Route, Link, Routes } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import { Navbar, Homepage, Currencies, Details } from './components/index'
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
            <Route path="/currencies" element={<Currencies/>}/>
            <Route path="/currencies/:coinId" element={<Details/>}/>
           </Routes>
          </div>
        </Layout>
      <div className="footer" leve={5}>
        <Typography.Title style={{ color: "white", textAlign: "center" }}>
          Currency Page <br/>
        </Typography.Title>
          <Space>
            <Link to="/" >Home</Link>
            <Link to="/exchanges" >Exchanges</Link>
          </Space>
        </div>
      </div>
    </div>
  )
}

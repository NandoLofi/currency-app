import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuFoldOutlined } from '@ant-design/icons'
import icon from '../images/Cry'
export default function Navbar() {
  return (
    <div className='nav-container'>
        <div className="logo-container">
            <Avatar src={icon} size="large"/>
            <Typography.Title level={2} className="logo">
              <Link to="/">Home</Link>
            </Typography.Title>
            {/* <button className='menu-control-container'>
              
            </button> */}
        </div>
    </div>
  )
}

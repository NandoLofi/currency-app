import React from 'react'
import { Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, FundOutlined } from '@ant-design/icons'
import icon from '../images/icon.png'
export default function Navbar() {
  return (
    <div className='nav-container'>
        <div className="logo-container">
            <Avatar src={icon} size="large"/>
            <Typography.Title level={2} className="logo">
              <Link to="/">Home</Link>
            </Typography.Title>
        </div>
        <Menu theme='dark'>
          <Menu.Item icon={<HomeOutlined/>}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined/>}>
            <Link to="/currencies"> Currencies </Link>
          </Menu.Item>
        </Menu>
    </div>
  )
}

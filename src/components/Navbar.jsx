import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuFoldOutlined } from '@ant-design/icons'

export default function Navbar() {
  return (
    <div className='nav__container'>
        <div className="logo__container">
            <Avatar />
            <Typography.Title level={2} className="logo"/>
        </div>
    </div>
  )
}

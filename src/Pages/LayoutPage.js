import FooterComp from "../Components/FooterComp";
import HeaderComp from "../Components/HeaderComp";
import { NavLink, Outlet } from "react-router-dom";

import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {
    HomeOutlined,
    LoadingOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
  } from '@ant-design/icons';
import { useState } from "react";
const { Header, Content, Footer } = Layout;

const items = [
    {
        label: (
            <NavLink to="/">Home</NavLink>
        ),
        key: 'home',
        icon: <HomeOutlined />,
    },
    {
        label: (
            <NavLink to="/about">About</NavLink>
        ),
        key: 'about',
        icon: <LoadingOutlined />,
    },
    {
        label: (
            <NavLink to="/contact">Contact</NavLink>
        ),
        key: 'contact',
        icon: <LoadingOutlined />,
    },
    {
        label: (
            <NavLink to="/blog">Blog</NavLink>
        ),
        key: 'blog',
        icon: <LoadingOutlined />,
    },
    {
        label: (
            <NavLink to="/portfolio">Portfolio</NavLink>
        ),
        key: 'portfolio',
        icon: <LoadingOutlined />,
    },
  ];

function LayoutPage() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <>
            {/* <HeaderComp />

            <Outlet />
            
            <FooterComp /> */}

            <Layout className="layout">
                <Header style={{ display: 'flex', alignItems: 'center', width: "100%" }}>
                    <div className="demo-logo">LOGO</div>
                    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
                </Header>
                <Content
                    style={{
                    padding: '50px',
                    }}
                >
                    <div
                    className="site-layout-content"
                    style={{
                        background: colorBgContainer,
                    }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer
                    style={{
                    textAlign: 'center',
                    }}
                >
                    <FooterComp />
                </Footer>
            </Layout>
        </>
    )
}

export default LayoutPage;
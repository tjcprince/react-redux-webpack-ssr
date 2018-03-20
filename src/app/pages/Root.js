import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../routes';

import styles from './Root.scss';

const { Header, Content, Footer, Sider } = Layout;

const Root = () => (
  <div>
    <div className={styles.div}>bbbaa</div>

    <Layout
      style={{
        minHeight: '100vh'
      }}
    >
      <Sider collapsible>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['/home']} mode="inline">
          <Menu.Item key="/home">
            <Link to="/home">
              <Icon type="pie-chart" />
              <span>首页</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/list">
            <Link to="/list">
              <Icon type="pie-chart" />
              <span>列表</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/detail">
            <Link to="/detail">
              <Icon type="pie-chart" />
              <span>详情</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            background: '#fff',
            padding: 0
          }}
        />
        <Content
          style={{
            margin: '0 16px'
          }}
        >
          <Breadcrumb
            style={{
              margin: '12px 0'
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              background: '#fff',
              minHeight: 360
            }}
          >
            {renderRoutes(routes)}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center'
          }}
        >
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  </div>
);
export default Root;

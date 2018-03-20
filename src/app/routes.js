import universal from 'react-universal-component';
import { increment } from './pages/Home/modules/home';

const routes = [
  {
    path: '/',
    exact: true,
    component: universal(() => import('./pages/Home'))
  },
  {
    path: '/home',
    component: universal(() => import('./pages/Home')),
    fetchData: store => store.dispatch(increment()) // 预加载
  },
  {
    path: '/list',
    component: universal(() => import('./pages/List'))
  },
  {
    path: '/detail',
    component: universal(() => import('./pages/Detail'))
  },
  {
    path: '*',
    component: universal(() => import('./notfound'))
  }
];

export default routes;

// import universal from 'react-universal-component';
// import Home from './pages/Home';
// import List from './pages/List';
// import Detail from './pages/Detail';
// import NotFound from './notfound';

// const routes = [
//   {
//     path: '/',
//     exact: true,
//     component: Home
//   },
//   {
//     path: '/home',
//     component: Home
//   },
//   {
//     path: '/list',
//     component: List
//   },
//   {
//     path: '/detail',
//     component: Detail
//   },
//   {
//     path: '*',
//     component: NotFound
//   }
// ];

// export default routes;

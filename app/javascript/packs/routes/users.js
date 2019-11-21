import IndexPage from '../components/admin/users/Index'
import NewPage from '../components/admin/users/New'

let crumbs = [
  {
    name: 'Home',
    path: '/'
  }
]

export default [
  {
    path: '/users',
    name: 'Users',
    component: IndexPage,
    meta: {
      crumbs: crumbs = [
        ...crumbs,
        ...[{
          name: 'Users',
          path: '/users',
        }]
      ]
    }
  },
  {
    path: '/users/new',
    name: 'New User',
    component: NewPage,
    meta: {
      crumbs: [
        ...crumbs,
        {
          name: 'New User',
          path: '/users/new',
        }
      ]
    }
  },
]
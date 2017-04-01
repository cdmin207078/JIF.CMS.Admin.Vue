
import dashBoardContent from './views/dashboard/content'
import dashBoardHello from './views/dashboard/hello'

import article from './views/article/list'
import article_edit from './views/article/edit'

export default [
  {
    path: '/dashboard',
    component: dashBoardContent
  },
  {
    path: '/hello',
    component: dashBoardHello
  },
  {
    path: '/article',
    component: article
    // children: [
    //   {
    //     path: 'edit',
    //     component: articleedit
    //   }
    // ]
  },
  {
    path: '/article/add',
    component: article_edit
  },
  {
    path: '/article/edit/:id',
    component: article_edit
  }
]

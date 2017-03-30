
import dashBoardContent from './views/dashboard/content'
import dashBoardHello from './views/dashboard/hello'

import article from './views/article/list'
// import ArticleEdit from './views/article/edit'

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
    path: '/article/',
    component: article
  }
  // {
  //   name: 'article',
  //   path: '/article/list',
  //   components: ArticleList
  // }
]

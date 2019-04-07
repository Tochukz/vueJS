import home from '@/components/home'
import blog from '@/components/blog'
import services from '@/components/services'
import contact from '@/components/contact'
import productdetails from '@/components/productdetails'
import pagenotfound from '@/components/pagenotfound'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/blog',
    name: 'blog',
    component: blog
  },
  {
    path: '/services',
    name: 'services',
    component: services
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
  {
    path: '/productdetails/:productId',
    name: 'productdetails',
    component: productdetails,
  },
  {
    path: '*',
    component: pagenotfound
    //Check if page exist on the server before showing 404 page.
  }
]

export default routes

const HelloWorld = () => import('src/components/HelloWorld/HelloWorld')

export default [
  {
    path: '/',
    redirect: '/HelloWorld'
  },
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld
  }
]

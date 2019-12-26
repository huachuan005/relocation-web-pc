const home = () => import('src/views/home/home')
const relocation1 = () => import('src/components/Relocation1/index')
const relocation2 = () => import('src/components/Relocation2/index')

export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    children: [
      {
        path: 'relocation1',
        name: 'relocation1',
        component: relocation1
      },
      {
        path: 'relocation2',
        name: 'relocation2',
        component: relocation2
      }
    ]
  }
]

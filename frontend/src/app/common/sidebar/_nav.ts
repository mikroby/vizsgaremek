import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Expert',
    url: '/expert',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Category',
    url: '/category',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Invoice',
    url: '/invoice',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'User',
    url: '/user',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Order',
    url: '/order',
    iconComponent: { name: 'cil-drop' }
  },
   
];


// {
//   name: 'Typography',
//     url: '/theme/typography',
//       linkProps: { fragment: 'someAnchor' },
//   iconComponent: { name: 'cil-pencil' }
// },
// {
//   title: true,
//     name: 'Extras'
// }, 
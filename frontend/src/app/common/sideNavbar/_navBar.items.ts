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
    iconComponent: { name: 'cil-people' }
  },
  {
    name: 'Category',
    url: '/category',
    iconComponent: { name: 'cilLayers' }
  },
  {
    name: 'User',
    url: '/user',
    iconComponent: { name: 'cilUser' }
  },
  {
    name: 'Order',
    url: '/order',
    iconComponent: { name: 'cilList' }
  },
  {
    name: 'Invoice',
    url: '/invoice',
    iconComponent: { name: 'cilNotes' }
  },
    
];

// egyéb lehetőségek:
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
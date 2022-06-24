import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Vezérlőpult',
    url: '/admin',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Szakember',
    url: '/admin/expert',
    iconComponent: { name: 'cil-people' }
  },
  {
    name: 'Kategória',
    url: '/admin/category',
    iconComponent: { name: 'cilLayers' }
  },
  {
    name: 'Felhasználó',
    url: '/admin/user',
    iconComponent: { name: 'cilUser' }
  },
  {
    name: 'Rendelés',
    url: '/admin/order',
    iconComponent: { name: 'cilList' }
  },
  {
    name: 'Számla',
    url: '/admin/invoice',
    iconComponent: { name: 'cilNotes' }
  },
  
];

// other useful options:
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
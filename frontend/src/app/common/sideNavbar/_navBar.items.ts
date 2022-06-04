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
    name: 'Customer',
    url: '/customer',
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
  {
    name: 'Tester',
    url: '/home',
    iconComponent: { name: 'cilLibrary' }
  },
  {
    name: 'Tester',
    url: '/home',
    iconComponent: { name: 'cilAddressBook' }
  },
  {
    name: 'Tester',
    url: '/home',
    iconComponent: { name: 'cilStorage' }
  },
  {
    name: 'Tester',
    url: '/home',
    iconComponent: { name: 'cilSortAscending' }
  },
  {
    name: 'Tester',
    url: '/home',
    iconComponent: { name: 'cilFeaturedPlaylist' }
  },
  {
    name: 'Tester',
    url: '/home',
    iconComponent: { name: 'cilChevronRight' }
  },
  {
    name: 'Tester',
    url: '/home',
    iconComponent: { name: 'cilChevronCircleRightAlt' }
  },
  {
    name: 'Tester',
    url: '/home',
    iconComponent: { name: 'cilArrowCircleRight' }
  },
  
];

// other options:
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
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
    url: '/invoice',
    iconComponent: { name: 'cilLibrary' }
  },
  {
    name: 'Tester',
    url: '/invoice',
    iconComponent: { name: 'cilAddressBook' }
  },
  {
    name: 'Tester',
    url: '/invoice',
    iconComponent: { name: 'cilStorage' }
  },
  {
    name: 'Tester',
    url: '/invoice',
    iconComponent: { name: 'cilSortAscending' }
  },
  {
    name: 'Tester',
    url: '/invoice',
    iconComponent: { name: 'cilFeaturedPlaylist' }
  },
  {
    name: 'Tester',
    url: '/invoice',
    iconComponent: { name: 'cilChevronRight' }
  },
  {
    name: 'Tester',
    url: '/invoice',
    iconComponent: { name: 'cilChevronCircleRightAlt' }
  },
  {
    name: 'Tester',
    url: '/invoice',
    iconComponent: { name: 'cilArrowCircleRight' }
  },
  {
    name: 'Tester',
    url: '/invoice',
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
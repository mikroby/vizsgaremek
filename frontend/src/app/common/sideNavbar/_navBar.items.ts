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
    name: 'Szakemberek',
    url: '/admin/expert',
    iconComponent: { name: 'cil-people' }
  },
  {
    name: 'Kategóriák',
    url: '/admin/category',
    iconComponent: { name: 'cilLayers' }
  },
  {
    name: 'Felhasználók',
    url: '/admin/customer',
    iconComponent: { name: 'cilUser' }
  },
  {
    name: 'Rendelések',
    url: '/admin/order',
    iconComponent: { name: 'cilList' }
  },
  {
    name: 'Számlák',
    url: '/admin/invoice',
    iconComponent: { name: 'cilNotes' }
  },
  {
    name: 'Tester',
    url: '/admin',
    iconComponent: { name: 'cilLibrary' }
  },
  {
    name: 'Tester',
    url: '/admin',
    iconComponent: { name: 'cilAddressBook' }
  },
  {
    name: 'Tester',
    url: '/admin',
    iconComponent: { name: 'cilStorage' }
  },
  {
    name: 'Tester',
    url: '/admin',
    iconComponent: { name: 'cilFeaturedPlaylist' }
  },
  {
    name: 'Tester',
    url: '/admin',
    iconComponent: { name: 'cilChevronRight' }
  },
  {
    name: 'Tester',
    url: '/admin',
    iconComponent: { name: 'cilChevronCircleRightAlt' }
  },
  {
    name: 'Tester',
    url: '/admin',
    iconComponent: { name: 'cilArrowCircleRight' }
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
import { DashboardConfig } from 'types'

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: 'Documentation',
      href: '/docs',
      disabled: true,
    },
    {
      title: 'Support',
      href: '/support',
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: 'post',
    },
    {
      title: 'Finder',
      href: '/dashboard/finder',
      icon: 'search',
      disabled: true,
    },
    {
      title: 'Settings',
      href: '/dashboard/settings',
      icon: 'settings',
      disabled: true,
    },
  ],
}

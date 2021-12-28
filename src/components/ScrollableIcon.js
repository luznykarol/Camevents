import React from 'react'

import Dashboard from '@/icons/scrollable/Dashboard'
import Integration from '@/icons/scrollable/Integration'
import Notice from '@/icons/scrollable/Notice'
import Reminders from '@/icons/scrollable/Reminders'
import Taxbudgeting from '@/icons/scrollable/Taxbudgeting'
import Wallet from '@/icons/scrollable/Wallet'

const Icon = ({ icon, className }) => {
  const icons = {
    Dashboard: Dashboard,
    Integration: Integration,
    Notice: Notice,
    Reminders: Reminders,
    Taxbudgeting: Taxbudgeting,
    Wallet: Wallet,
  }

  const Icon = icons[icon]
  return <Icon />
}

export default Icon

import { CardSkeleton } from '@/components/card-skeleton'
import { DashboardHeader } from '@/components/header'
import { DashboardShell } from '@/components/shell'

export default function DashboardBillingLoading() {
  return (
    <DashboardShell>
      <DashboardHeader heading='Finder' text='The finder tool.' />
      <div className='grid gap-10'>
        <CardSkeleton />
      </div>
    </DashboardShell>
  )
}

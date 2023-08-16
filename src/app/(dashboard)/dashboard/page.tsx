import { redirect } from 'next/navigation'

// import { db } from '@/lib/db'
// import { getCurrentUser } from '@/lib/session'
import { EmptyPlaceholder } from '@/components/empty-placeholder'
import { DashboardHeader } from '@/components/header'
import { PostCreateButton } from '@/components/post-create-button'
import { PostItem } from '@/components/post-item'
import { DashboardShell } from '@/components/shell'
import { Stats } from '@/components/stats'
import { DataTable } from '@/components/data-table'
import { Channel } from '@/components/data-table'

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hhltmpiizvmmcjlkxeos.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(
  supabaseUrl,
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhobHRtcGlpenZtbWNqbGt4ZW9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjI5MDA3NTEsImV4cCI6MTk3ODQ3Njc1MX0.dwT1L_WD0CZV1XSrc91wqByVOtlgfwWeLm7Dls4aQxk'
)

export const metadata = {
  title: 'Dashboard',
}

export default async function DashboardPage() {
  // const user = await getCurrentUser()
  // const posts: any = []

  const channels = await getData()

  // if (!user) {
  //   redirect(authOptions?.pages?.signIn || '/login')
  //   // console.log('no user')
  // }

  // const posts = await db.post.findMany({
  //   where: {
  //     authorId: user.id,
  //   },
  //   select: {
  //     id: true,
  //     title: true,
  //     published: true,
  //     createdAt: true,
  //   },
  //   orderBy: {
  //     updatedAt: 'desc',
  //   },
  // })

  return (
    <DashboardShell>
      <DataTable channels={channels} />
    </DashboardShell>
  )
}

async function getData() {
  let { data: channels, error } = await supabase.from('channels').select('*')

  if (error) {
    throw new Error('Failed to fetch data')
  }

  return channels as Channel[]
}

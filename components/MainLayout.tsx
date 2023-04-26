'use client'
import Grid from '@mui/material/Grid'
import Sidebar from '@/components/Sidebar/Sidebar'

export default function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Grid container spacing={2} style={{ zIndex: 1, position: 'relative' }}>
      <Grid item xs={12} lg={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={12} lg={8}>
        {children}
      </Grid>
    </Grid>
  )
}

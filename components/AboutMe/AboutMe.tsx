'use client'
import { Divider, Paper, Typography } from '@mui/material'
import styles from './styles.module.scss'
import Link from 'next/link'

export default function AboutMe() {
  return (
    <Paper elevation={3} className={styles.container} sx={{ mb: 3 }}>
      <Typography variant="h2">About me</Typography>
      <Typography variant="subtitle2">
        Developer, musician, science lover and avid reader
      </Typography>

      <Divider sx={{ mb: 2, mt: 2 }} />

      <Typography variant="body1" mt={2}>
        Full Stack Developer well-versed in web and web3 development. Highly
        effective at working on any phase of development process. Hardworking
        professional with remarkable technical abilities developed over 5 years
        of experience.
      </Typography>
      <Typography variant="body1" mt={2}>
        Former member of{' '}
        <Link href="https://lastknown.com/" target="__blank">
          LastKnown
        </Link>
        ,{' '}
        <Link href="https://metacademy.com/" target="__blank">
          Metacademy
        </Link>
        ,{' '}
        <Link href="https://nfkeys.com/" target="__blank">
          NFKeys
        </Link>
        ,{' '}
        <Link href="https://dev.foundryswap.com/" target="__blank">
          FoundrySwap
        </Link>{' '}
        teams. Co-Founder of{' '}
        <Link
          href="https://web.archive.org/web/20220313060726/https://masterminer.tech/"
          target="__blank"
        >
          Masterminer
        </Link>
        , Syscoin masternode hosting platform.
      </Typography>
    </Paper>
  )
}

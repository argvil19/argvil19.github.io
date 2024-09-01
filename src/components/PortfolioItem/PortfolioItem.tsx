'use client'
import { Box, Chip, Typography } from '@mui/material'
import Link from 'next/link'
import LinkIcon from '@mui/icons-material/Link'
import { Company } from '../interfaces'

export default function PortfolioItem(props: Company) {
  return (
    <Box key={props.title} mb={5}>
      <Typography variant="h4" sx={{ mb: 1 }}>
        {props.title}
        <Link href={props.url} target="_blank">
          <LinkIcon style={{ position: 'relative', top: 4, left: 5 }} />
        </Link>
      </Typography>
      {props.jobTitle && (
        <Typography variant="h6" sx={{ mb: 1 }}>
          {props.jobTitle}
        </Typography>
      )}
      {props.startDate && props.endDate && (
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          <Chip label={props.startDate} /> - <Chip label={props.endDate} />
        </Typography>
      )}
      <Typography variant="body1" sx={{ mb: 1 }}>
        {props.description}
      </Typography>
    </Box>
  )
}

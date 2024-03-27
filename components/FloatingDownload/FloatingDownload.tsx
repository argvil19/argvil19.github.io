'use client'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import styles from './styles.module.scss'
import { Avatar } from '@mui/material'
import Link from 'next/link'
import { FloatingDownloadProps } from '../interfaces'

export default function FloatingDownload({ url }: FloatingDownloadProps) {
  console.log(styles)
  return (
    <Link href={url} target="_blank" className={styles['floating-button']}>
      <Avatar>
        <FileDownloadIcon />
      </Avatar>
    </Link>
  )
}

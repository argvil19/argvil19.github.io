import styles from './styles.module.scss'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import Link from 'next/link'

export default function SocialIcons() {
  return (
    <div className={styles.social_icons}>
      <Link
        href={'https://github.com/argvil19'}
        className={styles.link}
        target="_blank"
      >
        <GitHubIcon className={styles.icon} />
      </Link>
      <Link
        href={'https://twitter.com/argvil19'}
        className={styles.link}
        target="_blank"
      >
        <TwitterIcon className={styles.icon} />
      </Link>
      <Link
        href={'https://www.linkedin.com/in/argenis-villasmil-70b73bb1'}
        className={styles.link}
        target="_blank"
      >
        <LinkedInIcon className={styles.icon} />
      </Link>
      <Link
        href={'mailto:argvil19@gmail.com'}
        className={styles.link}
        target="_blank"
      >
        <EmailIcon className={styles.icon} />
      </Link>
    </div>
  )
}

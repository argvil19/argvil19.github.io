import StarIcon from '@mui/icons-material/Star'
import { Chip } from '@mui/material'

export type Skill = {
  name: string
  isFeatured: boolean
}

export default function SkillChip(props: Skill) {
  return (
    <Chip
      label={props.name}
      key={props.name}
      sx={{ mb: 1, mr: 1 }}
      onDelete={() => {}}
      deleteIcon={
        props.isFeatured ? (
          <StarIcon style={{ width: 16, height: 16 }} />
        ) : (
          <></>
        )
      }
    />
  )
}

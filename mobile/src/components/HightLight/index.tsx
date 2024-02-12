import { Subtitle, Title } from "./styled"

interface HightLightProps{
  title: string
  subtitle?: string
  variant: 'lg' | 'md' | 'sm'
  center?: boolean
}

export function HightLight({
  subtitle,
  title,
  variant,
  center
}: HightLightProps) {
  return (
    <>
      <Title variant={variant}>{title}</Title>
      {
        subtitle && <Subtitle center={center}>{subtitle}</Subtitle>
      }
    </>
  )
}
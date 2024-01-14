import { Subtitle, Title } from "./styled"

interface HightLightProps{
  title: string
  subtitle?: string
  variant: 'lg' | 'md'
}

export function HightLight({
  subtitle,
  title,
  variant
}: HightLightProps) {
  return (
    <>
      <Title variant={variant}>{title}</Title>
      {
        subtitle && <Subtitle>{subtitle}</Subtitle>
      }
    </>
  )
}
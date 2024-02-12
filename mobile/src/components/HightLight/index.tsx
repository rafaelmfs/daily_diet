import { Subtitle, Title } from "./styled"

type TextAlign = "start" | "end" | "left" | "right" | "center" | "justify" 
interface HightLightProps{
  title: string
  subtitle?: string
  variant: 'lg' | 'md' | 'sm'
  titleAlign?: TextAlign
  subTitleAlign?: TextAlign;
}

export function HightLight({
  subtitle,
  title,
  variant,
  subTitleAlign,
  titleAlign
}: HightLightProps) {
  return (
    <>
      <Title align={titleAlign} variant={variant}>{title}</Title>
      {
        subtitle && <Subtitle align={subTitleAlign}>{subtitle}</Subtitle>
      }
    </>
  )
}
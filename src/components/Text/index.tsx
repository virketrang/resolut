// REACT
import { FC } from 'react'

// DEPENDENCIES
import styled from 'styled-components'

interface ComponentProps {
	value?: string
}

interface StyleProps {
	textColor?: string
}

type TextProps = ComponentProps & StyleProps

// STYLES
const StyledText = styled.h1<StyleProps>`
	color: ${({ textColor }) => (textColor ? textColor : '#000000')};
`

// COMPONENT
const TextComponent: FC<TextProps> = ({ value, textColor }) => {
	return <StyledText textColor={textColor}>{value}</StyledText>
}

export default function Text({ value, textColor }: TextProps) {
	return <TextComponent value={value} textColor={textColor} />
}

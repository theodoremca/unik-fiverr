import { StyledHeader, StyledText, StyledTextProps } from "../components/styled/TextStyle.styled";

export const StyledTextExample = (args: StyledTextProps) => <StyledText {...args}>Paragraph text</StyledText>
export const StyledHeaderExample = (args: StyledTextProps) => <StyledHeader {...args}>heading text</StyledHeader>
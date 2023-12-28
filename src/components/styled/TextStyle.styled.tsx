import styled, { CSSObject } from "styled-components";

interface RecordStyled {
  spacing: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'none';
}


const sizeMapping: Record<RecordStyled['spacing'], string | undefined> = {
  xs: '0.75rem',
  sm: '1rem',
  md: '1.125rem',
  lg: '1.25rem',
  xl: '1.5rem',
  '2xl': '1.875rem',
  '3xl': '2.25rem',
  'none': undefined
};
export type StyledTextProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  color?: string;
  fontWeight?: number;
  lineHeight?: string;
  padding?: string;
  margin?: string;
  align?: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';
  mt?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'none';
  mb?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'none';
  ml?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'none';
  mr?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'none';
  pt?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'none';
  pb?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'none';
  pl?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'none';
  pr?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'none';
}



const generateHeadingStyles = (props: StyledTextProps): CSSObject => ({
  textAlign: props.align,
  color: props.color || '#000',
  fontSize: sizeMapping[props.size || 'md'],
  fontWeight: props.fontWeight || 600,
  lineHeight: props.lineHeight || '1.125rem',
  padding: props.padding || '0',
  margin: props.margin || '0',

});

const generateTextStyles = (props: StyledTextProps): CSSObject => ({
  textAlign: props.align,
  color: props.color || '#000',
  fontSize: sizeMapping[props.size || 'sm'],
  fontWeight: props.fontWeight || 400,
  margin: `${sizeMapping[props.mt || 'none'] ?? 0} ${sizeMapping[props.mr || 'none'] ?? 0} ${sizeMapping[props.mb || 'none'] ?? 0} ${sizeMapping[props.ml || 'none'] ?? 0}`,
  padding:
    `${sizeMapping[props.pt || 'none'] ?? 0} ${sizeMapping[props.pr || 'none'] ?? 0} ${sizeMapping[props.pb || 'none'] ?? 0} ${sizeMapping[props.pl || 'none'] ?? 0}`

});

export const StyledHeader = styled.h2<StyledTextProps>`
  ${(props) => generateHeadingStyles(props)}
`;

export const StyledText = styled.p<StyledTextProps>`
  ${(props) => generateTextStyles(props)}
`;
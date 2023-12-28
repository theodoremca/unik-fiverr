import styled, { CSSObject } from "styled-components"

interface RecordType {
  spacing: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'none';
}
export interface StyledType {
  gap?: number;
  display?: 'flex'
  justify?: | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'right'
  | 'normal'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'safe center'
  | 'unsafe center'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'revert-layer'
  | 'unset';
  items?: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  flexwrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  flexgrow?: number;
  mt?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'none';
  mb?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'none';
  ml?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'none';
  mr?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'none';
  pt?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'none';
  pb?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'none';
  pl?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'none';
  pr?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'none';
}

const sizeMapping: Record<RecordType['spacing'], string | undefined> = {
  xs: '0.75rem',
  sm: '1rem',
  md: '1.125rem',
  lg: '1.25rem',
  xl: '1.5rem',
  '2xl': '1.875rem',
  '3xl': '2.25rem',
  'none': undefined
};

const generateFlexStyles = (props: StyledType): CSSObject => ({
  display: props.display || "flex",
  justifyContent: props.justify || "center",
  alignItems: props.items || "center",
  flexDirection: props.direction || "row",
  gap: props.gap,
  flexWrap: props.flexwrap,
  flexGrow: props.flexgrow,
  margin: `${sizeMapping[props.mt || 'none'] ?? 0} ${sizeMapping[props.mr || 'none'] ?? 0} ${sizeMapping[props.mb || 'none'] ?? 0} ${sizeMapping[props.ml || 'none'] ?? 0}`,
  padding:
    `${sizeMapping[props.pt || 'none'] ?? 0} ${sizeMapping[props.pr || 'none'] ?? 0} ${sizeMapping[props.pb || 'none'] ?? 0} ${sizeMapping[props.pl || 'none'] ?? 0}`
});

export const Container = styled.div<StyledType>`
  ${(props) => generateFlexStyles(props)}
`


export const PageContainer = styled.div<StyledType>`
    display:flex;
`


import { Container, StyledType } from "../components/styled/Container.styled";

export interface NumberChirldren {
    numberChirldren: number;// Assuming `args` is of type StyledType
}
type ContainerExampleProps = NumberChirldren & StyledType;
export const ContainerExample: React.FC<ContainerExampleProps> = ({ numberChirldren, ...args }) => <Container {...args}>
    {
        Array.from({ length: numberChirldren }).map((_, index) => <div style={{ height: '100px', width: '100px', margin: '5px', backgroundColor: 'blue', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }} key={index}>{index + 1}</div>)
    }
</Container>


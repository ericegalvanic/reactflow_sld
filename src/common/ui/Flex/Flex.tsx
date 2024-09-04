import Stack, { StackProps } from '../Stack';

type FlexProps = StackProps;

const Flex: React.FC<FlexProps> = ({ flexDirection = 'row', ...props }) => {
  return <Stack flexDirection={flexDirection} {...props} />;
};

export default Flex;

import { Heading, VStack } from '@navikt/ds-react';
interface Props {
  heading: string;
  text: string;
}
export const HeadingAndLargeText = ({ heading, text }: Props) => {
  return (
    <VStack align={'center'}>
      <Heading level={'3'} size={'small'}>
        {heading}
      </Heading>
      <Heading size={'medium'} as={'p'}>
        {text}
      </Heading>
    </VStack>
  );
};

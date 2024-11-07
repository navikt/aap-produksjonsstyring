import styles from './VenstreBorderBoks.module.css';
import { VStack } from '@navikt/ds-react';
import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}
export const VenstreBorderBoks = (props: Props) => {
  return (
    <VStack gap={'4'} justify={'space-around'} {...props} className={styles.venstreBorderBoks}>
      {props.children}
    </VStack>
  );
};

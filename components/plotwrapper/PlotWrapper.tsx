import { ReactNode } from 'react';
import styles from './PlotWrapper.module.css';

interface Props {
  children: ReactNode;
}

export const PlotWrapper = ({ children }: Props) => {
  return <div className={styles.plotWrapper}>{children}</div>;
};

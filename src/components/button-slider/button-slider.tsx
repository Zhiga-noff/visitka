import { ForwardRefRenderFunction, forwardRef, DetailedHTMLProps, BaseHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import styles from './button-slider.module.scss';

interface IProps
  extends DetailedHTMLProps<BaseHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  type: 'next' | 'prev';
  id: string;
}

const ButtonSliderRef: ForwardRefRenderFunction<HTMLButtonElement, IProps> = (
  { type, id, ...restProps },
  ref
) => (
  <button {...restProps} id={id} className={clsx(styles.btn, styles[type])} ref={ref}>
    {type === 'next' ? 'Следующий слайд' : 'Предыдущий слайд'}
  </button>
);

export const ButtonSlider = forwardRef(ButtonSliderRef);

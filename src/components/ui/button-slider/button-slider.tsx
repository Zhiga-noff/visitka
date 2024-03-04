import React, {BaseHTMLAttributes, DetailedHTMLProps, forwardRef, ForwardRefRenderFunction,} from 'react';

interface IProps
    extends DetailedHTMLProps<BaseHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    type: 'next' | 'prev';
    id: string;
}

const ButtonSliderRef: ForwardRefRenderFunction<HTMLButtonElement, IProps> = (
    {type, id, ...restProps},
    ref,
) => (
    <button {...restProps} id={id} ref={ref}>
        {type === 'next' ? (
            <img src="/mediaholding/image/layout/next.png" alt=""/>
        ) : (
            <img src="/mediaholding/image/layout/prev.png" alt=""/>
        )}
    </button>
);

export const ButtonSlider = forwardRef(ButtonSliderRef);

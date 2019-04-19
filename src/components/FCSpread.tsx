import * as React from 'react';
/**
 * 可以通过 Props 进行参数传递
 */
type Props = {
    className?: string,
    style?: React.CSSProperties;
}

export const FCSpreadAttributes: React.FC<Props> = props => {
    const {children, ...restProps} = props;
    return <div {...restProps}>{children}</div>
}

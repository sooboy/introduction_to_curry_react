import * as React from 'react';


// 列表组件
type ListComponents<T> = React.ComponentType<{items:T[]}>;

export {
    ListComponents
}
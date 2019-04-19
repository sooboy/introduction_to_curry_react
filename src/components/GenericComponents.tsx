import *  as React  from 'react';

export interface GenericComponentsProps<T> {
    items:T[],
    itemRenderer:(item:T) =>JSX.Element;
}

//将数据的
export  class GenericComponents<T> extends  React.Component<GenericComponentsProps<T>>{
    render(){
        const { items,itemRenderer} = this.props;
        return (
            <div>
                {items.map(itemRenderer)}
            </div>
        )
    }
}
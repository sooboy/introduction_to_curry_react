import * as  React from 'react';

type Props = {
    label: string;
    count: number;
    onIncrease: () => void;
}

const FCComponents: React.FC<Props> = props => {
    const {label, count, onIncrease} = props;
    const handleIncrement = () => {
        onIncrease()
    };
    return (
        <div>
              <span>
                   {label}:{count}
              </span>
            <button type="button" onClick={handleIncrement}>
                Increment
            </button>
        </div>
    )
};

export {
    FCComponents
}
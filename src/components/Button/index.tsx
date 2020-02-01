import React from 'react';
import styles from './button.module.css';

interface Props
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    color?: 'red' | 'turquoise';
    buttonClass?: string;
}

const Button: React.FC<Props> = ({ children, color, buttonClass, ...rest }) => {
    return (
        <button
            className={[styles.btn, buttonClass, color && styles[color]].join(
                ' '
            )}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;

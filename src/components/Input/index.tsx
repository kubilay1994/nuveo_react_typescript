import React from 'react';
import styles from './Input.module.css';

import { FieldInputProps, ErrorMessage } from 'formik';
import classes from './Input.module.css';

interface Props
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    label?: string;
}

const Input: React.FC<FieldInputProps<string> & Props> = ({
    label,
    ...rest
}) => {
    return (
        <div className={styles.inputContainer}>
            {label && <label className={styles.formLabel}>{label}</label>}
            <input className={styles.Input} {...rest} />
            <ErrorMessage
                component="div"
                name={rest.name}
                className={classes.error}
            />
        </div>
    );
};

export default Input;

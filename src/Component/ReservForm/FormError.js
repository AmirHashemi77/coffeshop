import React from 'react';

const FormError = ({errMessage,styles}) => {
    return (
        <span className={`text-red-600 font-leiko text-sm ${styles}`}>
            {errMessage}
        </span>
    );
};

export default FormError;
"use client";

import React from 'react';

const Alert = ({ type, message, onOk, onCancel }: any) => {
    let bgColor, position, button;
    const [isVisible, setIsVisible] = React.useState(true);

    switch (type) {
        case 'success':
            bgColor = 'bg-green-500';
            position = 'fixed top-0 right-0 m-4';
            break;
        case 'error':
            bgColor = 'bg-red-500';
            position = 'fixed top-0 right-0 m-4';
            break;
        case 'question':
            bgColor = 'bg-slate-950';
            position = 'fixed inset-0 flex items-center justify-center backdrop-blur-md';
            button = true;
            break;
        default:
            bgColor = 'bg-slate-800';
    }

    React.useEffect((): any => {
        if (type !== 'question') {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [type]);

    return isVisible ? (
        <>
            {type === 'question' &&
                <div className="fixed inset-0 bg-opacity-50"></div>
            }
            <div className={`alert-box text-white p-4 ${position} rounded transition duration-500 ease-in-out transform ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className={`${bgColor} rounded-lg p-4`}>
                    <div className="content mb-4 max-w-lg break-words">
                        {message}
                    </div>
                    {button &&
                        <div className="flex justify-end">
                            <button className="mr-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded transition-all" onClick={onOk}>OK</button>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded transition-all" onClick={onCancel}>Cancel</button>
                        </div>
                    }
                </div>
            </div>
        </>
    ) : null;
};

export default Alert;
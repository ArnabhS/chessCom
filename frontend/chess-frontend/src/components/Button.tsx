
import React from 'react';

type ButtonProps = {
    onClick: () => void;
    children: React.ReactNode;
};

export const Button = ({ onClick, children }: ButtonProps) => {
    return (
        <div>
            <button
                onClick={onClick}
                type="button"
                className="text-white font-bold text-xl bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 rounded-lg px-24 py-5 text-center me-2 mb-2"
            >
                {children}
            </button>
        </div>
    );
};

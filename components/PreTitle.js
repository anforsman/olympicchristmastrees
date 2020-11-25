import React from 'react';

const PreTitle = ({ children }) => {
    return (
        <span className="block text-base leading-6 font-semibold text-red-700 uppercase tracking-wide">{ children }</span>
    );
};

export default PreTitle;
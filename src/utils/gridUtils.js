import React from 'react';


const gridPattern = [6, 3, 3, 4, 4, 4, 3, 3, 6, 4, 4, 4 ]
export const findItemLength = (index) => {
    return gridPattern[index%gridPattern.length];
};

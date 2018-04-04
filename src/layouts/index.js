import React from 'react';

export default ({children}) => (
    <div style={{ margin: `00px auto`, maxWidth: 650, padding: `0 1rem` }}>
        <h3>My Site</h3>
        {children()}
     </div>
)
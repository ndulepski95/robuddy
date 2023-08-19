import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '500px' }}>
            {props.children}
        </div>
    );
};

export default Scroll;


//scroll is a Css property

//props, state, children. Our wrapping component 'Scroll' uses children to render its properties
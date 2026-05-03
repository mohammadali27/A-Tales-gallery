import React from 'react';

const Catagory = async () => {
    const res = await fetch("https://a-tales-gallery.vercel.app/data.json")
    const catagorys = await res.json();
    return (
        <div>
            
        </div>
    );
};

export default Catagory;
import React from 'react';

const GalleryCard = ({data}) => {
    console.log(data);
    return (
        <div className="max-w-[250px] rounded overflow-hidden shadow-lg bg-white p-3 m-2">
            <img className="w-full h-48 object-cover" src={data.picture} alt={`${data.occasion}`} />
            <div className="px-2 py-2">
                <div className="font-bold text-xl mb-2">{data.occasion}</div>
            </div>
        </div>
    );
}

export default GalleryCard;

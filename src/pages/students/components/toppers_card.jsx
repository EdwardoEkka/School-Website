import React from 'react';

const ToppersCard = ({ data }) => {
    return (
        <div className="max-w-[250px] rounded-lg overflow-hidden shadow-lg bg-white p-4 m-2 transition-transform transform hover:scale-105 hover:shadow-xl">
            <img className="w-full h-48 object-cover rounded-lg" src={data.picture} alt={`${data.name}`} />
            <div className="px-3 py-2">
                <div className="font-bold text-2xl mb-1 text-gray-800">{data.name}</div>
                <div className="bg-blue-100 text-blue-800 font-semibold rounded-full px-3 py-1 inline-block">
                    {data.percentage}%
                </div>
            </div>
        </div>
    );
}

export default ToppersCard;
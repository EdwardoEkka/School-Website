import React from 'react';

const FacultyCard = ({data}) => {
    return (
        <div className="max-w-[250px] rounded overflow-hidden shadow-lg bg-white p-3 m-2">
            <img className="w-full h-48 object-cover" src={data.picture} alt={`${data.name}`} />
            <div className="px-2 py-2">
                <div className="font-bold text-xl mb-2">{data.name}</div>
                <p className="text-gray-700 text-base">{data.subject} Teacher</p>
                <p className="text-gray-700 text-base">Qualification: {data.qualification}</p>
                <p className="text-gray-700 text-base">Experience: {data.experience}</p>
            </div>
        </div>
    );
}

export default FacultyCard;

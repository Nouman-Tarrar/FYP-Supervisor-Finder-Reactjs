import React from 'react'

const SupervisorCard = ({ name, domain, image }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 text-center">
      <img src={image} alt={name} className="w-24 h-24 mx-auto rounded-full mb-2" />
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-gray-600">{domain}</p>
    </div>
  );
};
export default SupervisorCard;
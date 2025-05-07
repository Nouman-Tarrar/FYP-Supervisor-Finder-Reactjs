import React from 'react'

const TestimonialBox = ({ feedback, student }) => {
  return (
    <div className="bg-white p-4 shadow rounded italic">
      “{feedback}”
      <div className="mt-2 text-sm text-right font-semibold">– {student}</div>
    </div>
  );
};
export default TestimonialBox;
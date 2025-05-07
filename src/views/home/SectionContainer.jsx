import React from 'react'

const SectionContainer = ({ children, bg = "bg-gray-50" }) => {
  return (
    <section className={`py-12 ${bg}`}>
      <div className="max-w-4xl mx-auto px-4">{children}</div>
    </section>
  );
};
export default SectionContainer;
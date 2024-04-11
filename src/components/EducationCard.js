import React from 'react';

function EducationCard({ institution, degree, year }) {
  return (
    <div className="education-card">
      <h4>{institution}</h4>
      <p>{degree}</p>
      <p>{year}</p>
    </div>
  );
}

export default EducationCard;

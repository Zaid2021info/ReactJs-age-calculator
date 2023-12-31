import React, { useState } from 'react';
import "./Calcuu.css"

const AgeWithMonthsDays = () => {
  const [birthdate, setBirthdate] = useState('');
  const [ageWithMonthsDays, setAgeWithMonthsDays] = useState(null);

  const calculateAgeWithMonthsDays = () => {
    const today = new Date();
    const birthdateDate = new Date(birthdate);

    let ageYears = today.getFullYear() - birthdateDate.getFullYear();
    let ageMonths = today.getMonth() - birthdateDate.getMonth();
    let ageDays = today.getDate() - birthdateDate.getDate();

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
      ageYears--;
      ageMonths += 12;
    }

    if (ageDays < 0) {
      const lastMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      ageDays += lastMonthDays;
      ageMonths--;
    }

    setAgeWithMonthsDays({ years: ageYears, months: ageMonths, days: ageDays });
  };

  const handleInputChange = (event) => {
    setBirthdate(event.target.value);
  };

  const handleCalculateAge = () => {
    calculateAgeWithMonthsDays();
  };

  const handleReset = () => {
    setBirthdate('');
    setAgeWithMonthsDays(null);
  };

  return (


    <>
    <h2><i className="fa-solid fa-caret-right zic"></i>Age Calculator<i className="fa-solid fa-caret-left lim"></i></h2>
    <div className='all'>
     
      <h3>  date of birth </h3>

      <div className='ibb'>
        <input
        className='inp'
          type="date"
          value={birthdate}
          onChange={handleInputChange}
        />
    
      <br />
      <button className='btn1' onClick={handleCalculateAge}>Calculate Age</button>
      <button className='btn2' onClick={handleReset}>Reset</button>
      </div>
      <br />
      {ageWithMonthsDays !== null && (
        <p>
          Your age is: <span className='final'>{ageWithMonthsDays.years} years, {ageWithMonthsDays.months} months, {ageWithMonthsDays.days} days </span>
        </p>
      )}
    </div>
    </>
  );
};

export default AgeWithMonthsDays;

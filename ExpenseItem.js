import React from 'react';

function ExpenseItem({ id, description, amount, updateAmount }) {
  const handleClick = () => {
    updateAmount(id);
  };

  return (
    <li>
      {description} - ${amount}
      <button onClick={handleClick}>Change Amount to $100</button>
    </li>
  );
}

export default ExpenseItem;

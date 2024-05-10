import React from 'react';

const Article = ({ title, date, preview, minutes }) => {
  const renderReadingTime = () => {
    // ... (unchanged)
  };

  const renderDate = () => {
    if (date) {
      return <small>{date}</small>;
    } else {
      return <small>January 1, 1970</small>;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      {renderDate()}
      <p>{preview}</p>
      <p>{renderReadingTime()}</p>
    </article>
  );
}

export default Article;

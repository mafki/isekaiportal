import React from 'react';
function TimeStamp(targetTimestamp, all) {
  const currentTimestamp = Math.floor(Date.now() / 1000); // Current timestamp in seconds
  const timeDifferenceSeconds = targetTimestamp - currentTimestamp;

  if (timeDifferenceSeconds < 0) {
    return 'Event has already occurred.';
  }

  const days = Math.floor(timeDifferenceSeconds / (3600 * 24));
  const hours = Math.floor((timeDifferenceSeconds % (3600 * 24)) / 3600);
  


  if (all === "all") {
    return (
      <div className='countdown-timer'>
        {days} Days {hours} Hours 
      </div>
    );
  }

  return `Days: ${days} Hours: ${hours} `;
}

export default TimeStamp;

const newYears = "1 Jan 2023";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  console.log(newYearsDate - currentDate);
}

// Initial Call
countdown();

const formatDate = (dateString: string) => {
  console.log("Date string: ", dateString);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const d = new Date(Number(dateString));

  const year = d.getFullYear(); // 2019
  const date = d.getDate(); //

  const monthName = months[d.getMonth()];

  const dayName = days[d.getDay()];

  const formatted = `${dayName}, ${date} ${monthName} ${year}`;

  return formatted;
};

export default formatDate;

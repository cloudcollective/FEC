const getAverageRating = (ratings) => {
  let total = 0;
  let numberOfRatings = 0;
  for (let i = 1; i <= 5; i += 1) {
    if (ratings[i]) {
      total += (parseInt(ratings[i], 10) * i);
      numberOfRatings += parseInt(ratings[i], 10);
    }
  }

  const average = total / numberOfRatings;
  return average;
};
export default getAverageRating;

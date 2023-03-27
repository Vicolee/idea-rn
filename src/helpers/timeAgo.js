import moment from 'moment';

export default timeAgo = (createdAt) => {
  const now = moment(new Date()); // current time
  const then = moment(createdAt); // time the object was created
  const diff = now.diff(then);
  const duration = moment.duration(diff);

  // get the difference in years, months, days, hours, or minutes
  if (duration.asYears() >= 1) {
    return `${Math.floor(duration.asYears())}y ago`;
  } else if (duration.asMonths() >= 1) {
    return `${Math.floor(duration.asMonths())}m ago`;
  } else if (duration.asDays() >= 1) {
    return `${Math.floor(duration.asDays())}d ago`;
  } else if (duration.asHours() >= 1) {
    return `${Math.floor(duration.asHours())}h ago`;
  } else {
    return `${Math.floor(duration.asMinutes())}m ago`;
  }
};



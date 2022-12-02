export function groupByDate(data) {
  let dates = [];
  data.forEach(e => {
    const [year, month] = e.date.split("/"); // 20/10/2020
    const date = `${month}/${year}`; // 10/2019 11/2019
    if (!dates.includes(date)) {
      dates.push(date);
    }
  });
  return dates;
}

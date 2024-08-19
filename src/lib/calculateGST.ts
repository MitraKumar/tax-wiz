import dayjs from "dayjs";

export function calculateGST(a: number, b: number): number {
  return a + b;
}

export function calculateNumberOfDaysFromDueDate(currentDate: string, dueDate: string) {
  const currentDayJsDate = dayjs(currentDate, "MM/DD/YYYY");
  const dueDayJsDate = dayjs(dueDate, "MM/DD/YYYY");
  const noOfDays = currentDayJsDate.diff(dueDayJsDate, 'day');
  return noOfDays > 0 ? noOfDays : 0;
}

export function calculateDueDate(month: string, year: string) {

  const yearRegex = /^\d{4}$/;
  if (!yearRegex.test(year)) {
    throw new Error("Invalid arguments, not a valid year.");
  }

  const monthMap: { [key: string]: string } = {
    January: "01",
    February: "02",
    March: "03",
    April: "04",
    May: "05",
    June: "06",
    July: "07",
    August: "08",
    September: "09",
    October: "10",
    November: "11",
    December: "12"
  };

  const monthNumber = monthMap[month];

  if (!monthNumber) {
    throw new Error("Invalid arguments, not a valid month.")
  }

  return `${monthNumber}/20/${year}`;
}
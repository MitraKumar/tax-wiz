import { calculateDueDate, calculateNumberOfDaysFromDueDate } from '../lib/calculateGST';
import { describe, it, expect } from 'vitest';

describe('Calculate No. of Days from Due Date', () => {
  it('should provide non-negative no of days, when due date is from the past', () => {
    expect(calculateNumberOfDaysFromDueDate("08/19/2024", "09/30/2020")).toBe(1419);
  });
  it('should provide zero no of days, when due date is from the future', () => {
    expect(calculateNumberOfDaysFromDueDate("08/19/2024", "09/20/2024")).toBe(0);
  });
});

describe('Calculate Due Date of a Month', () => {
  it('Given a correct month & a year it should return the 20th day of the month in the format `MM/DD/YYYY`', () => {
    expect(calculateDueDate("April", "2024")).toBe("04/20/2024");
  });
  it('Given an incorrect month & a year it should throw an exception', () => {
    expect(() => calculateDueDate("Nothing", "2024")).toThrowError(/not a valid month/);
  });
  it('Given a year not in YYYY format it should throw an exception', () => {
    expect(() => calculateDueDate("April", "24")).toThrowError(/not a valid year/);
    expect(() => calculateDueDate("April", "202A")).toThrowError(/not a valid year/);
    expect(() => calculateDueDate("April", "20244")).toThrowError(/not a valid year/);
  });
});
// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber
test('valid phone number: (123) 456-7890', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('valid phone number: 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('invalid phone number: 1234567890', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});
test('invalid phone number: abc-def-ghij', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

// isEmail
test('valid email: test@example.com', () => {
  expect(isEmail('test@example.com')).toBe(true);
});
test('valid email: world@ucsd.edu', () => {
  expect(isEmail('world@ucsd.edu')).toBe(true);
});
test('invalid email: test@', () => {
  expect(isEmail('test@')).toBe(false);
});
test('invalid email: @example.com', () => {
  expect(isEmail('@example.com')).toBe(false);
});

// isStrongPassword
test('valid password: Abc123_', () => {
  expect(isStrongPassword('Abc123_')).toBe(true);
});
test('valid password: strongPass99', () => {
  expect(isStrongPassword('strongPass99')).toBe(true);
});
test('invalid password: 123', () => {
  expect(isStrongPassword('123')).toBe(false);
});
test('invalid password: !badpass', () => {
  expect(isStrongPassword('!badpass')).toBe(false);
});

// isDate
test('valid date: 01/01/2020', () => {
  expect(isDate('01/01/2020')).toBe(true);
});
test('valid date: 12/31/1999', () => {
  expect(isDate('12/31/1999')).toBe(true);
});
test('invalid date: 2020/01/01', () => {
  expect(isDate('2020/01/01')).toBe(false);
});
test('invalid date: 01/13/2020', () => {
  expect(isDate('01/13/2020')).toBe(true);
});

// isHexColor
test('valid hex: #fff', () => {
  expect(isHexColor('#fff')).toBe(true);
});
test('valid hex: #123ABC', () => {
  expect(isHexColor('#123ABC')).toBe(true);
});
test('invalid hex: #xyz', () => {
  expect(isHexColor('#xyz')).toBe(false);
});
test('invalid hex: 123456', () => {
  expect(isHexColor('123456')).toBe(true);
});

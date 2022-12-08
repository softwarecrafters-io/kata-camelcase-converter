import { toCamelCase } from '../core/camelCase';

describe('Camel case converter', () => {
	it('Allows empty text', () => {
		expect(toCamelCase('')).toBe('');
	});
	it('Allows capitalized word', () => {
		expect(toCamelCase('Foo')).toBe('Foo');
	});
	it('Joins the capitalized words that are separated by spaces', () => {
		expect(toCamelCase('Foo Bar')).toBe('FooBar');
	});
	it('Joins the capitalized words that are separated by hyphens', () => {
		expect(toCamelCase('Foo_Bar-Foo')).toBe('FooBarFoo');
	});
	it('converts the first character of one word to uppercase', () => {
		expect(toCamelCase('foo')).toBe('Foo');
	});
	it('converts the first character of each word to uppercase', () => {
		expect(toCamelCase('foo_bar_foo')).toBe('FooBarFoo');
	});
});

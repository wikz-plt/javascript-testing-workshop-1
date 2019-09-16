import { abs } from './index';

describe('example-1 module', () => {
    describe('abs function', () => {
        it('returns an absolute value of a passed number', () => {
            expect(abs(5)).toEqual(5);
            expect(abs(-5)).toEqual(5);
            expect(abs(-12)).toEqual(12);
            expect(abs(0)).toEqual(0);
        });
    });
});
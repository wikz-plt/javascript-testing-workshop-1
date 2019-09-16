import Vector from './Vector';

describe('Vector class', () =>  {
    it('keeps coordinates in its properties', () => {
        const vector = new Vector(5, 4, 3);

        expect(vector).toHaveProperty('x');
        expect(vector).toHaveProperty('y');
        expect(vector).toHaveProperty('z');

        expect(vector.x).toEqual(5);
        expect(vector.y).toEqual(4);
        expect(vector.z).toEqual(3);
    });

    it('calculates its length', () => {
        const vector = new Vector(5,4,3);

        expect(vector).toHaveProperty('length');
    });

    describe('add static method', () => {
        it('returns a new Vector which is a sum of two other vectors', () => {
            const vector1 = new Vector(5,3,2);
            const vector2 = new Vector(1,1,-1);

            const resultVector = Vector.add(vector1, vector2);

            expect(resultVector.constructor).toEqual(Vector);
            expect(resultVector.x).toEqual(6);
            expect(resultVector.y).toEqual(4);
            expect(resultVector.z).toEqual(1);
        });
    });
});
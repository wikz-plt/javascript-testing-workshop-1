class Vector {
    /**
     * adds two vectors together
     * @param {Vector} v1
     * @param {Vector} v2
     * @returns {Vector}
     */
    static add(v1, v2) {
        return new Vector(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
    }

    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;

        this.length = this.calculateLength();
    }

    calculateLength() {
        const { x, y, z } = this;
        return Math.sqrt((x * x) + (y * y) + (z * z));
    }
}

export default Vector;
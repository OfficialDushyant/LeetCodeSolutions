import twoSum from '../../src/ArraysAndHashing/two_sum';
import {describe, expect, it} from '@jest/globals';

describe('Two Sum', () => {
    it('should return the indices of two numbers that add up to the target', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
        expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
        expect(twoSum([3, 3], 6)).toEqual([0, 1]);
        expect(twoSum([3, 2, 4], 7)).toEqual([0, 2]);

    });

    it('should return an empty array if no two numbers add up to the target', () => {
        expect(twoSum([2, 7, 11, 15], 10)).toEqual([]);
        expect(twoSum([3, 3], 7)).toEqual([]);
    });
});
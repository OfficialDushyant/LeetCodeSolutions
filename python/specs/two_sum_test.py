"""Unit tests for the two_sum function in the two_sum module."""
import unittest
from src.two_sum import TwoSum


class TwoSumTest(unittest.TestCase):
    def setUp(self):
        self.two_sum_test = TwoSum()

    def test_basic_case(self):
        # Test with a basic example.
        nums = [2, 7, 11, 15]
        target = 9
        expected = [0, 1]
        self.assertEqual(self.two_sum_test.two_sum(nums, target), expected)

    def test_multiple_elements(self):
        # Test with a different set where the TwoSum is in the middle.
        nums = [3, 2, 4]
        target = 6
        expected = [1, 2]
        self.assertEqual(self.two_sum_test.two_sum(nums, target), expected)

    def test_no_two_tum(self):
        # Test where no valid pair exists.
        nums = [1, 2, 3]
        target = 7
        expected = []
        self.assertEqual(self.two_sum_test.two_sum(nums, target), expected)

    def test_negative_numbers(self):
        # Test with negative numbers.
        nums = [-1, -2, -3, -4, -5]
        target = -8
        expected = [2, 4]
        self.assertEqual(self.two_sum_test.two_sum(nums, target), expected)

    def test_duplicate_numbers(self):
        # Test with duplicate elements.
        nums = [3, 3]
        target = 6
        expected = [0, 1]
        self.assertEqual(self.two_sum_test.two_sum(nums, target), expected)


if __name__ == "__main__":
    unittest.main()

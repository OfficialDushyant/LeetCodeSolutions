## Two Sum [REF](https://leetcode.com/problems/two-sum/description/) `Easy`

### Optimal solution 
1. Create an empty hash map.
2. Iterate through `nums` array.
3. Check if the difference of between `target` and number at index is in has map.
4. If the difference value is not found in hash map add the number at the index and index in a hash map, number as a key and index as a value. i.e `numbs[index]: index`.
5. Else if the difference value is already in hash map return current index and index value of number found in hash map.
 6. At the end of the iteration, if the difference value is not found in hash map. return empty array.

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        
        map = {}
        
        for index in range(len(nums)):
            if target - nums[index] in map:
                return [map[target - nums[index]], index]
            map[nums[index]] = index

        return []
```

#### Time Complexity: O(N) 
#### Space Complexity: O(N)
Usually the first algorithm in almost every major source is insertion sort. But we will be doing bubble sort instead.

**Definition of a sorted array**
For array of length N, any value at $X_i$ position will always be less than or equal to $X_i + 1$
so $X_i \leq X_i + 1$

## Example

For given array \[1, 3, 7, 4, 2\] , Sort the array using Bubble sort.

![[Bubble Sort img1.png]]

[[Big O Time Complexity]] for this algorithm is $O(N^2)$ 

Explanation: 
For size of N we will be traversing the array for N-1 + N-2 +  ....... + 1. 
This sum can be expressed using the formula for the sum of an arithmetic series 
$$\frac{(N-1) \times N}{2}$$

For an exact number of comparisons in bubble sort $\sum_{i=1}^{N-1} i = \frac{N \times (N-1)}{2}$ 

Reference https://www.youtube.com/watch?v=NqwvNm2enEo

It can be further described as $\frac{N^2 - N}{2}$

After removing the insignificant terms from the equation to get the [[Big O Time Complexity]] it will be $O(N^2)$.
 


## Implementation

```typescript
function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; ++i){
        for (let j = 0; j < arr.length - 1 - i; ++j){
            if(arr[j] > arr[j + 1]){
                const temp = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
            }
        }
    }
}
```


>**Note**
>Why is it called Bubble sort? Larger values are bubbled up in the array 😅 


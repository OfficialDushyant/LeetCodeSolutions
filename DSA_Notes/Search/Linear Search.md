
> [!The A in DSA]
> Assuming the following 
> Javascript actually has an Array.
> We only have access to .length property. We won't got full C in JS though.

## Search

### Linear Search
Probably the most simplest type of search algorithm.
![[SearchImg1.png]]
It is something similar to using indexOf method in JS.

**What is the [[Big O Time Complexity]]?** 
	What is the worst case? 
	If we find the value at the last index or don't find at all
		So as the input size grows complexity grow in same proportion (Liner growth) 
So the Answer is $O(N)$

### Implementation
```typescript
function linear_search(haystack: number[], needle: number): boolean {
    for (let i = 0; i < haystack.length; ++i){
        if(haystack[i] === needle) return true;
    }
    return false;
}
```

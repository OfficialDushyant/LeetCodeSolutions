This algorithm is bit obscure, but it will lay the foundation for other algorithms we will encounter.


⭐️ Important question to ask when you encounter a data set. *Is it ordered?*
Let's say it is this time.

Algorithm explained.
![[binary search img1.png]]

What would be the complexity [[Big O Time Complexity]], if we jump 10% of the length of the array ?
- *What is the worst case?* Our value V is larger then all the elements and we walk through the entire length. 
- As we were jumping 10% of the length we only perform 10 operations technically. So, theoretically,  this algorithm is still better then linear search.
- However the complexity $O(10+ 0.1N)$, after removing the constants, it is still $O(N)$.

 
**Let's Improve it even farther.**
![[Binary search img2.png]]

Here we are searching in half the length (50%) and ignoring the other half based on value we are searching for.

What is the complexity [[Big O Time Complexity]] of this solution?
- Let's see we are breaking the lent in half until we either find the value or there is no length left to break in half. (Worst case)
- every operation our length of N elements is going to be halved so $N, N/2, N/4, N/8, N/16 ....... N/2^K$.
- so in worst case $N/2^K = 1$. and time complexity for N number of elements would be $log_2N =K$ and there for complexity in terms of BigO is $O(logN)$  *logarithmic growth*.


> [!NOTE]
> **Another Bog O Trick**
> If the input halves at each step, its likely $O(logN)$ or $O(N logN)$

### Implementing a Binary Search

```typescript
function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;
    do{
        const m = Math.floor(lo + (hi - lo) /2 );
        const v = haystack[m];
 
        if(v === needle) return true;
 
        if(v < needle) lo = m + 1; //low level is exclusive 
 
        if(v > needle) hi = m; //high is inclusive 
 
    }while(lo < hi)
 
    return false
}
```

**Recursive solution**
```typescript
function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0; 
    let hi = haystack.length;
    let m = Math.floor(lo + (hi - lo) / 2 );
    
    if (haystack[m] === needle) return true;
    
    if (haystack[m] < needle) return bs_list(haystack.slice(m + 1, hi), needle);     
    
    if(haystack[m] > needle) return bs_list(haystack.slice(lo , m), needle);
    
    return false;
}
```

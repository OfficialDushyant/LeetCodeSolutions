
>Given two crystal balls that will break if dropped from height enough 
>distance, determine the exact spot in which it will break in the most 
>optimized way

*Example question in interview. "Imagine we have two crystal balls that breaks if thrown from certain height. What would be the optimal way to find out at which floor in a 100 story building if we throw the ball, it will break?"*

![[The crystal balls.png]]
Step 1 Just as we did in [[Binary Search]] we will go half way through list
Step 2 If we found the ball is broken here. we loos one ball and now we have only one ball left. If the ball is not broken then save this index and walk up to the half way of remaining size of the list.
Step 3 So we have to do [[Linear Search]] from the last point where ball was not broken

[[Big O Time Complexity]] of the approach is still linear as described in image. 


Time complexity for $O(\sqrt{N})$

![[Time Complexity Graph of O(sqrt(N)).png]]

Here is the graph illustrating the time complexity of  $O(\sqrt{N}$) . The function grows moderately, slower than linear $O(N)$ but faster than logarithmic  $O(\log N)$ growth. This complexity is typical in algorithms that involve dividing the problem into progressively smaller parts, such as some primality testing algorithms.


### Implementation

```typescript
function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));
    let i = jumpAmount
    for(; i < breaks.length; i += jumpAmount){
        if(breaks[i]) break;
    }
    i -=jumpAmount;
    for (let j = 0 ; j < jumpAmount && i < breaks.length; ++j ,++i){
        if(breaks[i]) return i
    }

    return -1;
}
```
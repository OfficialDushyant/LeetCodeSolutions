**What are arrays?**

`const a = []`  is not an array.
Array occupies a specific amount of memory in a sequence at the time of invocation.
Arrays are often confused by the List.
![[ArrayStructorTS.png]]

**What are the operations we can do with an array?**
- Getting a value form specific Index.
- Inserting a value at specific Index.
- Deleting a value at specific Index. (Set the value to null)

We can not grow an array because the with in memory is fixed and array has to allocate memory in sequence. 

**What is the time complexity of operations?**
It is a constant time complexity ([[Big O Time Complexity]]) $O(1)$, because we can access value at a given index.

**Notes**
Arrays are fixed size, continuous memory chunks.
That means you can not grow it.
There is no 'InsertAt' or push or pop, but doesn't mean that you can't implement those.


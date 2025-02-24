##  Definition

Big O is a way to categorize your algorithm's time or memory requirements based on input.
It is not meant to be the exact measurement. 

It is a generalized way for you to understand how your algorithm will perform as the size of the input grows.

**Big O, said differently**
**As the input grows, how fast dose computation or memory grows?**

## Example:

If some one says $O(N)$ Oh of N, they mean your algorithm grows linearly based on input.


## Why do we use it? 

Often it will help us make a decisions about what data structures and algorithms to use. Knowing how they will perform can greatly help create best possible program.


## Code Example

First lets consider the following code

```typescript
function sum_char_codes(n: string): number {
	let sum = 0;
	for (let i = 0; i < n.length; ++i){
		sum += n.charCodeAt(i)
	}
	
	return sum;
}
```

### ⭐️ Important concept "Growth is with respect to the input."

In the real world 
obviously memory growing is not computationally free, but in the matter of thinking about algorithms, we don't necessarily think about that.

In languages like Go and Javascript you pay even higher penalties because the memory can be kept around, grows faster, and causes complete halts in your programs for cleanup.

This is a O(N) because for every one extra character in string we ave to go through the loop once. so for string of N characters we will loop through N times. 

**How can you tell?** ==Trick - look for the number of loops==



**So if the previous one was O(N), What is the following?**

```typescript
function sum_char_codes(n: string): number {
	let sum = 0;
	for (let i = 0; i < n.length; ++i){
		sum += n.charCodeAt(i);
	}
	
	for (let i = 0; i < n.nemgth; ++i){
		sum += n.charCodeAt(i);
	}
	return sum
}
```


### ⭐️ Important concept "Constants are dropped"

In this case time complexity will be O(2N) will become O(N) because we drop the constant.

O(2N) -> O(N) and this makes sense. That is because Big O is meant to describe the upper bound of the algorithm (the growth of the algorithm).

as the in put grows the constant eventually becomes irrelevant.

Take the following
$N = 1, O(10N) = 10, O(N^2) = 1$
$N = 5, O(10N) = 50, O(N^2) = 25$
$N = 100, O(10N) = 1000, O(N^2) = 10,000 // 10x Bigger$


**Another Example**

```typescript 
function sum_char_codes(n: string): number {
	let sum = 0;
	for (let i = 0; i < n.length; ++1) {
		const charCode = n.charCodeAt(i);
		if (charCode === 69) {
			return sum;
		}
		sum += charCode;
	}
	return sum;
}
```

### ⭐️ Worst case is the usually the way we measure

In BigO we often consider the worst case 
Especially in interviews.
E = 69
Therefor any string with E in it will terminate early (unless E is the last item in the list).

IT'S STILL O(N)


![[Time Complexity Graphs.png]]

• **O(1)**: Constant time, remains flat regardless of input size.

• **O(log n)**: Logarithmic time, grows slowly as the input size increases.

• **O(n)**: Linear time, grows proportionally with the input size.

• **O(n log n)**: Log-linear time, grows faster than linear but slower than quadratic.

• **O(n²)**: Quadratic time, grows quickly as input size increases.

• **O(2^n)**: Exponential time, grows extremely fast, becoming impractical for large inputs.


**More examples**

**O(N^2)**

```typescript
function sum_char_codes(n: string): number {
	let sum = 0;
	for (let i = 0; i < n.length; ++i){
		for(let j = 0; j < n.length; ++j){
			sum += charCode;
		}
	}
	return sum;
}
```

**O(N^3)**

```typescript
function sum_char_codes(n: string): number {
	let sum = 0;
	for (let i = 0; i < n.length; ++i){
		for(let j = 0; j < n.length; ++j){
			for(let k = 0; k < n.length, ++k){
				sum += charCode;
			}
		}
	}
	return sum;
}
```

**O(n log n)**
Quiksort

**O(log n)**
Binary search
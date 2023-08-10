# Big O Complexity Cheatsheet

## Time Complexities

### O(1) - Constant Time

- Meaning: Algorithm's runtime remains constant regardless of input size.
- Example: Accessing an element in an array by index.

### O(log n) - Logarithmic Time

- Meaning: Algorithm's runtime grows logarithmically with input size.
- Example: Binary search in a sorted array.

### O(n) - Linear Time

- Meaning: Algorithm's runtime grows linearly with input size.
- Example: Iterating through all elements in an array.

### O(n log n) - Linearithmic Time

- Meaning: Algorithm's runtime grows between linear and quadratic.
- Example: Merge Sort, Quick Sort.

### O(n^2) - Quadratic Time

- Meaning: Algorithm's runtime grows quadratically with input size.
- Example: Nested loops iterating through a 2D array.

### O(n^k) - Polynomial Time

- Meaning: Algorithm's runtime grows polynomially with input size.
- Example: Algorithms with nested loops up to 'k' levels.

### O(2^n) - Exponential Time

- Meaning: Algorithm's runtime doubles with each additional input, can be slow.
- Example: Recursive algorithms for the Traveling Salesman Problem.

### O(n!) - Factorial Time

- Meaning: Algorithm's runtime grows factorially, highly inefficient.
- Example: Brute force solving of the Traveling Salesman Problem.

## Space Complexities

### O(1) - Constant Space

- Meaning: Algorithm uses a fixed amount of memory regardless of input.
- Example: Storing a few variables, no data structures.

### O(n) - Linear Space

- Meaning: Algorithm's memory usage grows linearly with input.
- Example: Storing elements in an array.

### O(n^2) - Quadratic Space

- Meaning: Algorithm's memory usage grows quadratically with input.
- Example: Storing elements in a 2D array.

### O(log n) - Logarithmic Space

- Meaning: Algorithm's memory usage grows logarithmically with input.
- Example: Recursive algorithms that split the problem into halves.

### Note

- Big O notation describes upper bounds of runtime/memory in terms of input size.
- It helps analyze efficiency without focusing on constant factors.
- Time and space complexities can differ for the same algorithm.

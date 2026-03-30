![[binary-and-linear-search-animations.gif]]

## JUDGMENT
> ==Main rule of the data structure or concept.==
> ==A short sentence that answers: when should I use this?==

Cut the list based on the value of the middle until finds the target value

---

## LAW OBSERVED
> ==Example of correct usage of the structure.==
> ==Describe a scenario where applying this structure solves the problem efficiently.==

Example
* Large size arrays with **linear time search**

Solving
 * Because the array is already ordered, search for the middle position brings us the grouping by "less than middle value" and "more than middle value"
 * If the target is less than middle, remove the right lookup. The same inverse when more then middle
 * Repeat the process until the lookup area shrinks completely or until the middle is the target


---

## KEYS TO POWER
> ==Technical concepts that explain why the structure works==

- **Complexity**:  O(log n)
- **Internal structure**: sorted array
- **Main property**: reorganizing lookup area
- **Typical behavior**: search for middle index

---

## APPLICATION
| ==Practical situations in programming where this structure is used==

- ==Type of problem==
- ==Example of system or feature==
- ==Type of algorithm that commonly uses this structure==

SQL table looking for primary index cannot be linear

---

## THE INVERSE
> ==When NOT to use this structure.==
> ==Mention other structures that would work better and why.==

When the list is not ordered

---

## IMPLEMENTATION EXAMPLE
==Small code snippet illustrating basic usage==

```pseudo
left = index 0
right = last index

loop until the search interval collapses
	- get middle based on the diff between floor round(right and left) (nearest index on the left)
	
	- if middle equals target, return target
	
	- if middle more than target, cuts of entire right and replaces right index by the left index of middle
	
	- if middle less than targe, cuts of entire left and replaces left index by the right index of middle
	  
	- repeats
	
interval collapses
	return Falsy

```

## LeetCode
https://leetcode.com/problems/binary-search/

## Youtube
```vid
https://www.youtube.com/watch?v=t3svuOuBGRI
Title: Binary Search - LeetCode 704 - JavaScript
Author: AlgoJS
Thumbnail: https://i.ytimg.com/vi/t3svuOuBGRI/mqdefault.jpg
AuthorUrl: https://www.youtube.com/@AlgoJS
```
```vid
https://www.youtube.com/watch?v=hDn8iOc30Tk
Title: Binary Search Algorithm - Computerphile
Author: Computerphile
Thumbnail: https://i.ytimg.com/vi/hDn8iOc30Tk/mqdefault.jpg
AuthorUrl: https://www.youtube.com/@Computerphile
```
```vid
https://www.youtube.com/watch?v=eVuPCG5eIr4
Title: Binary Search Animated
Author: Dreams of Code
Thumbnail: https://i.ytimg.com/vi/eVuPCG5eIr4/mqdefault.jpg
AuthorUrl: https://www.youtube.com/@dreamsofcode
```

## Handwritten
![[IMG_3295.jpeg]]
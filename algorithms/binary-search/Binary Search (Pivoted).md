Edge case for [[Binary Search]] 

![[Screenshot 2026-03-30 at 14.03.14.png]]

## APPLICATION
| ==Practical situations in programming where this structure is used==

- ==Type of problem==
- ==Example of system or feature==
- ==Type of algorithm that commonly uses this structure==

Sorted Array that has been rotated, creating 2 section in array that are sorted

---

## IMPLEMENTATION EXAMPLE
==Small code snippet illustrating basic usage==

```pseudo
left = index 0
right = last index

loop until the search interval collapses
	- get middle based on the diff between floor round(right and left) (nearest index on the left)
	
	- if middle equals target, return target

	- check if left section is ordered (left <= middle)
		- if target value is not between left and middle, cut of left section
		- else cut of right section
	- else
		- if target value is not between right and middle, cut of right section
		- else cut of left section
	  
	- repeats
	
interval collapses
	return Falsy


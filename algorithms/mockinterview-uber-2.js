'use strict'

/*
You are given an array prerequisites where prerequisites[i] = [a, b] indicates that you
must take course b first if you want to take course a.
The pair [0, 1] indicates that you must take course 1 before taking course 0.
There are a total of numCourses courses you are required to take, labeled from 0 to numCourses - 1.
Return true if it is possible to finish all courses, otherwise return false.

Example 1:
  Input:  numCourses = 2, prerequisites = [[0, 1]]
  Output: true

Example 2:
  Input:  numCourses = 2, prerequisites = [[0, 1], [1, 0]]
  Output: false
*/

function fun(numCourses, prerequisites) {

    const graph = new Map();

    const addNode = (course) => {
        graph.set(course, []);
    }

    const addEdge = (a, b) => {
        graph.get(a).push(b);
        graph.get(b).push(a);
    }

    for (let i = 0; i < numCourses; i++) {
        addNode(i);
    }

    for (const prereq of prerequisites) {

        // DETECT CICLE
        if (
            graph.has(prereq[1]) // SE JÁ EXISTE O NÓ
            && (graph.get(prereq[1]) == prereq[0]) // SE O NÓ TEM O MESMO VALOR QUE O CURSO
        ) {
            return false;
        }

        addEdge(
            prereq[0], prereq[1]
        )

    }

    console.log('graph', graph);

    return true;
}

(function () {

    const test1 = {
        numCourses: 2,
        prerequisites: [
            [0, 1]
        ],
        expected: true
    };

    const test2 = {
        numCourses: 2,
        prerequisites: [
            [0, 1],
            [1, 0]
        ],
        expected: false
    };

    if (
        test1.expected === fun(test1.numCourses, test1.prerequisites)
        && 
        test2.expected === fun(test2.numCourses, test2.prerequisites)
    ) {
        console.log('test accepted');
    } else {
        console.log('test failed');
    }

})()
/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
    const m = maze.length;
    const n = maze[0].length;

    if (m == 0 && n == 0) return -1;

    const dimensions = [
        [1, 0], // RIGHT
        [-1, 0], // LEFT
        [0, 1], // TOP
        [0, -1], // BOTTOM
    ];

    const queue = [];
    queue.push([entrance, 0]);

    while (queue.length) {
        let [position, steps] = queue.shift();

        steps++;

        // DISCOVER NEW POSSIBLE PATH
        for (d of dimensions) {
            let i = position[0] + d[0];
            let j = position[1] + d[1];
            
            // CHECK MAZE LIMITS AND COLISION
            if (i < 0 || i >= m || j < 0 || j >= n || maze[i][j] == "+")
                continue;

            if (
                i == 0 ||
                i == m - 1 || // ULTIMO INDICE POSSIVEL NO M
                j == 0 ||
                j == n - 1 // ULTIMO INDICE POSSIVEL NO N
            ) {
                return steps;
            }

            queue.push([[i, j], steps]);
            maze[i][j] = "+";
        }
    }

    return -1;
};

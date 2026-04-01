/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    /*
    *  - ARRAY OF POSSIBLE ENTRANCES
    * 
    * 
    * 
    * 
    * 
    */

    let m = board.length;
    let n = board[0].length;

    let dimensions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    let entrances = [];

    // FIND POSSIBLE ENTRANCES
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == word[0]) {
                entrances.push([i, j]);
            }
        }
    }

    if (!entrances.length) return false;

    if (word.length === 1) return true;

    // TEST EACH ENTRANCE
    for (e of entrances) {

        let lookupCharIndex = 1;
        const queue = [];

        board[e[0]][e[1]] = 0;
        queue.push(e)

        while (queue.length > 0) {

            // [1,3]
            // [2,3]
            // [2,2]
            const position = queue.shift();

            for (d of dimensions) {

                let i = position[0] + d[0];
                let j = position[1] + d[1];

                // CHECK LIMITS
                if (
                    i < 0 || i > m - 1
                    || j < 0 || j > n - 1
                ) continue;

                // CHECK NEXT CHAR
                if (word[lookupCharIndex] === board[i][j]) {
                    board[i][j] = 0;
                    queue.push([i, j]);
                    lookupCharIndex++;
                }
            }

            if (word.length === lookupCharIndex) {
                return true;
            }

        }

        return false;

    }
};
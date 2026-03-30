
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];

const adjacencyList = new Map();

function addNode(airport) {
    adjacencyList.set(airport, [])
}

function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination)
    adjacencyList.get(destination).push(origin)
}

airports.forEach(addNode)

routes.forEach(route => addEdge(...route))

console.log(adjacencyList)

console.log('======================')

/*
HOW TO DISCOVER IF EXISTS A ROUTE FROM PHX TO BKK
*/
// bfs
function bfs(start, target) {

    const visited = new Set();

    const queue = [start];

    while (queue.length > 0) {

        const airport = queue.shift(); // REMOVE THE FIRST ELEMENT OFF THE QUEUE

        const destinations = adjacencyList.get(airport); // GET AIRPORT EDGES

        for (const destination of destinations) {

            if (destination === target) {
                console.log('found it!');
            }

            // ADD TO QUEUE (FIFO) ONLY IF IT HASN'T BEEN VISITED
            if (!visited.has(destination)) {
                visited.add(destination);
                queue.push(destination);
                console.log(destination)
            }

        }

    }

}

bfs('PHX', 'BKK');
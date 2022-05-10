class Node {
	constructor(value, adjacent = new Set()) {
		this.value = value;
		this.adjacent = adjacent;
	}
}

class Graph {
	constructor() {
		this.nodes = new Set();
	}

	// this function accepts a Node instance and adds it to the nodes property on the graph
	addVertex(vertex) {
		this.nodes.add(vertex);
	}

	// this function accepts an array of Node instances and adds them to the nodes property on the graph
	addVertices(vertexArray) {
		for (let vertex of vertexArray) {
			this.nodes.add(vertex);
		}
	}

	// this function accepts two vertices and updates their adjacent values to include the other vertex
	addEdge(v1, v2) {
		v1.adjacent.add(v2);
		v2.adjacent.add(v1);
	}

	// this function accepts two vertices and updates their adjacent values to remove the other vertex
	removeEdge(v1, v2) {
		v1.adjacent.delete(v2);
		v2.adjacent.delete(v1);
	}

	// this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
	removeVertex(vertex) {
		this.nodes.delete(vertex);
	}

	// this function returns an array of Node values using DFS
	depthFirstSearch(start) {
		const visited = new Set();
		const result = [];

		function _dfs(curr) {
			if (curr == null) return null;

			visited.add(curr);
			result.push(curr.value);

			curr.adjacent.forEach((adj) => {
				if (!visited.has(adj)) {
					return _dfs(adj);
				}
			});
		}
		_dfs(start);
		return result;
	}

	// this function returns an array of Node values using BFS
	breadthFirstSearch(start) {
		const visited = new Set();
		const queue = [start];
		let result = [];

		visited.add(start);

		while (queue.length) {
			let curr = queue.shift();
			result.push(curr.value);

			curr.adjacent.forEach((adj) => {
				if (!visited.has(adj)) {
					visited.add(adj);
					queue.push(adj);
				}
			});
		}
		return result;
	}
}

module.exports = { Graph, Node };

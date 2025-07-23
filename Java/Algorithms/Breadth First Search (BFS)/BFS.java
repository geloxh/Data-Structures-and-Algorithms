import java.util.*;

public class BFS {
    public static void bfs(int start, List<List<Integer>> graph) {
        boolean[] visited = new boolean[graph.size()];
        Queue<Integer> queue = new LinkedList<>();
        queue.add(start);
        visited[start] = true;
        
        while (!queue.isEmpty()) {
            int node = queue.poll();
            System.out.print(node + " ");
            for (int neighbor : graph.get(node)) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.add(neighbor);
                }
            }
        }
    }
    
    public static void main(String[] args) {
        // Create a graph using an adjaceny list
        List<List<Integer>> graph = new ArrayList<>();
        
        // Example graph:
        // 0 -- 1
        // |    |
        // 2 -- 3
        graph.add(Arrays.asList(1, 2)); // Neighbors of node 0
        graph.add(Arrays.asList(0, 3)); // Neighbors of node 1
        graph.add(Arrays.asList(0, 3)); // Neighbors of node 2
        graph.add(Arrays.asList(1, 2)); // Neighbors of node 3
        
        // Perform BFS starting from node 0
        System.out.println("BFS starting from node 0: ");
        bfs(0, graph);
    }
}

import java.util.*;

public class DFS {
    public static void dfs(int node, boolean[] visited, List<List<Integer>> graph) {
        visited[node] = true;
        System.out.print(node + " ");
        for (int neighbor : graph.get(node)) {
            if (!visited[neighbor]) {
                dfs(neighbor, visited, graph);
            }
        }
    }
    
    public static void main(String[] args) {
        // Create a grap using an adjacency list
        int numberOfNodes = 5; // Example: 5 nodes (0 to 4)
        List<List<Integer>> graph = new ArrayList<>();
        
        // Initialize the adjacency list
        for (int i = 0; i < numberOfNodes; i++) {
            graph.add(new ArrayList<>());
        }
        
        // Add edges to the graph (example edges)
        graph.get(0).add(1);
        graph.get(0).add(2);
        graph.get(1).add(3);
        graph.get(1).add(4);
        graph.get(2).add(4);
        
        // Initialize visited array
        boolean[] visited = new boolean[numberOfNodes];
        
        // Perform DFS starting from node 0
        System.out.println("Depth-First Search starting from node 0: ");
        dfs(0, visited, graph);
    }
}
import java.util.LinkedList;
import java.util.Queue;

public class QueueDataStructure {
    public static void main(String[] args) {
        Queue<Integer> queue = new LinkedList<>();
        queue.add(1);
        queue.add(2);
        System.out.println(queue.poll()); // Output: 1
    }
}
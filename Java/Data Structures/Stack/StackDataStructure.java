import java.util.Stack;

public class StackDataStructure {
    public static void main(String[] args) {
        Stack<String> stack = new Stack<>();
        stack.push("One");
        stack.push("Two");
        System.out.println(stack.pop()); // Output: Two
    }
}
import java.util.HashMap;

public class HashMapDataStructure {
    public static void main(String[] args) {
        HashMap<String, Integer> map = new HashMap<>();
        map.put("apple", 10);
        map.put("banana", 20);
        System.out.println(map.get("banana")); // Output: 20
    }
}
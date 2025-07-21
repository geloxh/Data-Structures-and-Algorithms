public class LinkedList {
   public static void main(String[] args) {
      Node head = new Node(10);
      head.next = new Node(20);
      head.next.next = new Node(30);
      
      Node current = head;
      while (current != null) {
         System.out.println(current.data);
         current = current.next;
      }
   } 
}
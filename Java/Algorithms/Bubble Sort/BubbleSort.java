public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp; 
                }
            }
        }
    }
    
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90}; // Unsorted Array
        
        System.out.println("Unsorted array: ");
        printArray(arr);
        
        bubbleSort(arr); // Sort the array
        
        System.out.println("Sorted array: ");
        printArray(arr); // Print the sorted array
    }
    
    // Helper method to print the array
    public static void printArray(int[] arr) {
        for (int value : arr) {
            System.out.print(value + " ");
        }
    System.out.println();
    }
}
import java.util.LinkedList;
import java.util.Scanner;

public class holeCalculator 
{
	int number; 
	LinkedList<Integer> linkedList = new LinkedList<Integer>();
	
	private int hole(int num)
	{
		int remainder;
		int numOfHoles = 0;
		while (number > 0) 
		{
			remainder = number % 10;
			linkedList.push(remainder);
			System.out.println("linked list: " + linkedList);
			number = number / 10;
		}

		while (!linkedList.isEmpty()) 
		{
			 int digToBeChecked = linkedList.pop();
			 if((digToBeChecked == 0) || (digToBeChecked == 4) || (digToBeChecked == 6) 
					 || (digToBeChecked == 9))
					 {
				 		numOfHoles = numOfHoles + 1;
				 		return numOfHoles;
				 
					 }
			 if(digToBeChecked == 8)
			 {
				 numOfHoles = numOfHoles + 2;
			 		return numOfHoles;
			 }
			 
			 else return numOfHoles;
		}
		return numOfHoles;
	}
	
	public static void main(String[] args)
	{
		holeCalculator hc = new holeCalculator();
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter your integer input here: ");
		int input = sc.nextInt();
		int result = hc.hole(input);
		sc.close();
		System.out.println("Number of holes for this input is: " + result);
		
		
	}
}


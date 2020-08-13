package principal;

import java.util.Scanner;
import geometria.Triangulo;

public class Main {

	public static void main(String[] args) {
		
		try (Scanner sc = new Scanner(System.in)) {
			
			Triangulo x = new Triangulo();
			Triangulo y = new Triangulo();
			
			System.out.println("Digite os três lados do triângulo X: ");
			x.ladoA = sc.nextDouble();
			x.ladoB = sc.nextDouble();
			x.ladoC = sc.nextDouble();
			
			System.out.println("Digite os três lados do triângulo Y: ");
			y.ladoA = sc.nextDouble();
			y.ladoB = sc.nextDouble();
			y.ladoC = sc.nextDouble();
			
			double xArea = x.calcularArea();
			double yArea = y.calcularArea();
			
			System.out.printf("A área do triângulo X é: %f", xArea);
			System.out.printf("A área do triângulo Y é: %f", yArea);
			
		}
		
		
	}

}

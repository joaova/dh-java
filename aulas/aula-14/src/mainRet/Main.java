package mainRet;

import java.util.Scanner;
import geometria.Retangulo;

public class Main {

	public static void main(String[] args) {
		
		try (Scanner sc = new Scanner(System.in)) {
			
			Retangulo ret = new Retangulo();
			
			System.out.println("Digite a altura e largura de um retangulo: ");
			
			ret.altura = sc.nextDouble();
			
			ret.largura = sc.nextDouble();
			
			System.out.printf("Area: %.2f", ret.area());
			
			System.out.println();
			
			System.out.printf("Perimetro: %.2f", ret.perimetro());
			
			System.out.println();
			
			System.out.printf("Diagonal: %.2f", ret.diagonal());
			
			
		}
		
	}

}

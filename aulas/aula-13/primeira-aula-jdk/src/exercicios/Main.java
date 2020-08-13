package exercicios;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
//		int idade = 18;
//		String nome = "Joao";
//		char letra = 'a';
//		double nota = 10.5;
//		
//		System.out.println(nome + " tem " + idade + " anos");
//		
//		// >, <, >=, <=, !=, !(not)
//		if (idade >= 18) {
//			System.out.println("Maior de idade");
//		} else {
//			System.out.println("Pirralho");
//		}
//		
//		for (int i = 0; i < 11; i++) {
//			System.out.println(i*8);
//		}
//		int i = 0;
//		
//		while (i < 10) {
//			System.out.println(8*i);
//			
//			i++;
//		}
		
		
		Scanner sc = new Scanner(System.in);
		
		int op = 0;
		float num1=0, num2=0;
		
		do {
			
			menu();
			op = sc.nextInt();
			
			if(op < 5 && op > 0) {
				
				System.out.println("DIGITE UM NÚMERO: "); 
				num1 = sc.nextInt(); 
				System.out.println("DIGITE UM NÚMERO: "); 
				num2 = sc.nextInt();
				
				if(op == 4 && num2 == 0)  {
					do {
						
						System.out.println("Divisao por 0, digite outro denominador");
						num2 = sc.nextInt();
						
					} while (num2 == 0);
				}
				
			}
			
			switch(op) { 
				case 1: somar(num1, num2);
						break; 
				case 2: subtrair(num1, num2);
						break; 
				case 3: multiplicar(num1, num2);
						break; 
				case 4: dividir(num1, num2); 
						break; 
				case 5: System.out.println("OBRIGADO! VOLTE SEMPRE!"); 
						break; 
				default: System.out.println("OPÇÃO INVÁLIDA"); 
			} 
		} while(op != 5); 
		
//		int[] numeros = {2,3,4,5,6};
//		
//		for(int i = 0; i < numeros.length; i++) {
//			System.out.println(numeros[i]);
//		}
//		
//		Scanner sc = new Scanner(System.in);
//		int[][] matriz = new int[2][2];
//		
//		for(int i = 0; i < 2; i++) {
//			for(int j = 0; j < 2; j++) {
//				matriz[i][j] = sc.nextInt();
//			}
//		}
//		
//		for(int i = 0; i < 2; i++) {
//			for(int j = 0; j < 2; j++) {
//				System.out.print(matriz[i][j]);
//			}
//			
//			System.out.println();
//		}
	
	}
	
	public static void menu() {
		
		System.out.println("Escolha uma opção: ");
		System.out.println("1 - Somar");
		System.out.println("2 - Subtrair");
		System.out.println("3 - Multiplicar");
		System.out.println("4 - Dividir");
		System.out.println("5 - Sair");
		
	}
	
	public static void somar(float num1, float num2) {
		 
		System.out.println("O RESULTADO DA OPERAÇÃO É: "+(num1+num2)); 
		
	}
	
	public static void subtrair(float num1, float num2) {
		
		System.out.println("O RESULTADO DA OPERAÇÃO É: "+(num1-num2)); 
		
	}
	
	public static void multiplicar(float num1, float num2) {

		System.out.println("O RESULTADO DA OPERAÇÃO É: "+(num1*num2)); 
		
	}
	
	public static void dividir(float num1, float num2) {
		
		System.out.println("O RESULTADO DA OPERAÇÃO É: "+(num1/num2)); 
		
	}

		
}


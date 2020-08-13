package mainFunc;

import empregados.Funcionario;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
		try (Scanner sc = new Scanner(System.in)) {
			
			double aumento;
			
			Funcionario nf = new Funcionario();
			
			System.out.print("Nome: ");
			
			nf.nome = sc.nextLine();
			
			System.out.print("Salario bruto: ");
			
			nf.salarioBruto = sc.nextDouble();
			
			System.out.print("Imposto: ");
			
			nf.imposto = sc.nextDouble();
						
			System.out.printf("Empregado: %s, $ %.2f", nf.nome, nf.salarioLiquido());
			
			System.out.println();
			
			System.out.print("Qual porcentagem deseja aumentar o salário? ");
			
			aumento = sc.nextDouble();
			
			nf.aumentarSalario(aumento);
						
			System.out.printf("Dados atualizados: %s, $ %.2f", nf.nome, nf.salarioLiquido());
		}
		
	}

}

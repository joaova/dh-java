package mainAlunos;

import escola.Alunos;
import java.util.Scanner;

public class MainA {

	public static void main(String[] args) {
		
		try (Scanner sc = new Scanner(System.in)) {
			
			Alunos na = new Alunos();
			
			System.out.println("Digite o nome do aluno e suas notas: ");
			
			na.nome = sc.nextLine();
			na.nota1 = sc.nextDouble();
			na.nota2 = sc.nextDouble();
			na.nota3 = sc.nextDouble();
			System.out.println();
			
			na.situacaoAluno(na.calcularMedia());
			
		}
		
	}

}

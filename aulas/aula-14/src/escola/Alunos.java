package escola;

public class Alunos {
	
	public String nome;
	public double nota1, nota2, nota3;
	double media;
	
	public double calcularMedia() {
		
		media = (nota1 + nota2 + nota3) / 3;
		
		return media;
		
	}
	
	public void situacaoAluno(double media) {
		
		if (media >= 60) {
			
			System.out.printf("Passou! \nNota final: %.2f", media);
			
		} else {
			
			System.out.printf("Não passou! Faltaram %.2f pontos.", 60 - media); 
			
		}
	}
	
}

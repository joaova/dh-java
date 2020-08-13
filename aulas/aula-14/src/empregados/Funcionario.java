package empregados;

public class Funcionario {
	
	public String nome;
	public double salarioBruto, imposto;

	
	public double salarioLiquido() {
		
		return salarioBruto - salarioBruto * (imposto/100);
		
	}
	
	public void aumentarSalario(double aumento) {
		
		salarioBruto *= (aumento/100 + 1);
		
	}
}

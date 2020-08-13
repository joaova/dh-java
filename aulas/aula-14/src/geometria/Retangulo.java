package geometria;

public class Retangulo {
	
	public double largura;
	public double altura;
	
	public double area() {
		return largura*altura;
	}
	
	public double perimetro() {
		
		return largura*2 + altura*2;
		
	}
	
	public double diagonal() {
		
		return Math.sqrt(Math.pow(altura, 2) + Math.pow(largura,2));
				
	}
	
}

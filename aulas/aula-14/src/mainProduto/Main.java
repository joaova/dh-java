package mainProduto;

import java.util.Scanner;
import estoque.Produto;


public class Main {

	public static void main(String[] args) {
		
		try (Scanner sc = new Scanner(System.in)) {
			
			int add, rm;
			
			System.out.println("Digite os dados do produto: ");
			
			System.out.print("Nome: ");
			
			Produto np = new Produto();
			
			np.nome = sc.nextLine();
			
			System.out.print("Preço: ");
			
			np.valorProduto = sc.nextDouble();
			
			System.out.print("Quantidade em estoque: ");
						
			np.quantidade = sc.nextInt();
			
			System.out.printf("Dados do produto: %s, $%.2f, %d unidades, Total: $%.2f", np.nome, np.valorProduto, np.quantidade, np.valorTotal());
			
			System.out.println();
			
			System.out.print("Entre o número de produtos a serem adicionados no estoque: ");
			
			add = sc.nextInt();
			
			np.adicionarProdutos(add);
						
			System.out.printf("Dados atualizados: %s, $%.2f, %d unidades, Total: $%.2f", np.nome, np.valorProduto, np.quantidade, np.valorTotal());
			
			System.out.println();
			
			System.out.print("Entre o número de produtos a serem removidos do estoque: ");
			
			rm = sc.nextInt();
			
			np.removerProdutos(rm);
						
			System.out.printf("Dados atualizados: %s, $%.2f, %d unidades, Total: $%.2f", np.nome, np.valorProduto, np.quantidade, np.valorTotal());
	
		}
		
	}

}

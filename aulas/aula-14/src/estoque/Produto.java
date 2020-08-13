package estoque;

public class Produto {
	
	public String nome;
	public double valorProduto;
	public int quantidade;
	
	public double valorTotal() {
		
		return valorProduto * quantidade;
		
	}
	
	public void adicionarProdutos(int quantidadeAdicionada) {
		quantidade += quantidadeAdicionada;
	}
	
	public void removerProdutos(int quantidadeRemovida) {
		quantidade -= quantidadeRemovida;
	}

}

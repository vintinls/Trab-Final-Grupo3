package com.serratec.trab_final.grupo3.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.serratec.trab_final.grupo3.Entity.Produto;
import com.serratec.trab_final.grupo3.Repository.ProdutoRepository;

@Service
public class ProdutoService {

	@Autowired
	private ProdutoRepository produtoRepository;

	public List<Produto> listarProdutos() {
		return produtoRepository.findAll();
	}

	public Optional<Produto> encontrarProdutoPorId(Long id) {
		return produtoRepository.findById(id);
	}

	public Produto criarProduto(Produto produto) {
		return produtoRepository.save(produto);
	}

	public Produto atualizarProduto(Long id, Produto produtoAtualizado) {
		if (produtoRepository.existsById(id)) {
			produtoAtualizado.setId(id);
			return produtoRepository.save(produtoAtualizado);
		} else {
			return null;
		}
	}

	public void deletarProduto(Long id) {
		produtoRepository.deleteById(id);
	}
}
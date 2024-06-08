package com.serratec.trab_final.grupo3.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.serratec.trab_final.grupo3.Entity.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}
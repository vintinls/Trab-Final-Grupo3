package com.serratec.trab_final.grupo3.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.serratec.trab_final.grupo3.Entity.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}

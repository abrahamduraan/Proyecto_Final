
package com.proyectofinal.dao;

import com.proyectofinal.domain.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaDao extends JpaRepository<Categoria,Long> {
    
}

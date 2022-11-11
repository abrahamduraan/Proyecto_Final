
package com.proyectofinal.dao;

import com.proyectofinal.domain.Articulo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArticuloDao extends JpaRepository<Articulo,Long> {
    
}

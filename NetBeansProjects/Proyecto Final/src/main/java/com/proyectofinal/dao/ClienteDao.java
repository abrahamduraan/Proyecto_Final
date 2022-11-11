
package com.proyectofinal.dao;

import com.proyectofinal.domain.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteDao extends JpaRepository<Cliente,Long> {
    
}

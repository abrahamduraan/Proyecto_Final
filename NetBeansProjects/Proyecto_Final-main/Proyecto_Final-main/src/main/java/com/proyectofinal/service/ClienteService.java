package com.proyectofinal.service;

import com.proyectofinal.domain.Cliente;
import java.util.List;

public interface ClienteService {
    //Los metodos para poder hacer un CRUD
    //Create Read Update Delete

    public List<Cliente> getClientes();

    public Cliente getCliente(Cliente cliente);

    public void save(Cliente cliente);

    public void delete(Cliente cliente);
}

package com.proyectofinal.controller;

import com.proyectofinal.domain.Articulo;
import com.proyectofinal.service.ArticuloService;
import com.proyectofinal.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class TennisController {

    //Provoca que el objeto se cree si no existe o se use el que existe... no hace más de 1 objeto
    //Esto se conoce como inyeccion de dependencias...
    @Autowired
    private ArticuloService articuloService;

    @Autowired
    private CategoriaService categoriaService;

    @GetMapping("/tennis/nike")
    public String nike(Model model) {
        var articulos = articuloService.getArticulos(false);
        model.addAttribute("articulos", articulos);
        return "/tennis/nike";
    }

    @GetMapping("/tennis/jordan")
    public String jordan(Model model) {
        var articulos = articuloService.getArticulos(false);
        model.addAttribute("articulos", articulos);
        return "/tennis/jordan";
    }

    @GetMapping("/tennis/adidas")
    public String adidas(Model model) {
        var articulos = articuloService.getArticulos(false);
        model.addAttribute("articulos", articulos);
        return "/tennis/adidas";
    }

    @GetMapping("/tennis/newBalance")
    public String newBalance(Model model) {
        var articulos = articuloService.getArticulos(false);
        model.addAttribute("articulos", articulos);
        return "/tennis/newBalance";
    }

    @GetMapping("/tennis/mostrarCarrito")
    public String mostrarCarrito(Model model) {
        var articulos = articuloService.getArticulos(false);
        model.addAttribute("articulos", articulos);
        return "/tennis/mostrarCarrito";
    }
}

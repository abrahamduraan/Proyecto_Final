package com.proyectofinal;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class Encriptar {

    public static void main(String[] args) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        var claveAdmin = encoder.encode("admin");
        var claveUser = encoder.encode("user");
        System.out.println("Admin (admin): " + claveAdmin);
        System.out.println("User (user): " + claveUser);

    }

    public static String encripta(String texto) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        return encoder.encode(texto);
    }

}

package com.proyectofinal;

import org.springframework.context.annotation.Configuration;
import static org.springframework.security.authorization.AuthorityAuthorizationManager.hasAnyRole;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    //Este metodo permite la autenticacion de usuarios en memoria
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication()
                .withUser("admin")
                .password("{noop}admin")
                .roles("ADMIN", "USER")
                .and()
                .withUser("user")
                .password("{noop}user")
                .roles("USER");
    }

    //Este metodo permite la autorizacion a los recursos del sitio web
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers("/cliente/nuevo", "cliente/guardar",
                        "/cliente/modificar/**", "/cliente/eliminar/**",
                        "/categoria/nuevo", "categoria/guardar",
                        "/categoria/modificar/**", "/categoria/eliminar/**",
                        "/articulo/nuevo", "articulo/guardar",
                        "/articulo/modificar/**", "/articulo/eliminar/**",
                        "/usuario/nuevo", "usuario/guardar",
                        "/usuario/modificar/**", "/usuario/eliminar/**",
                        "/cliente/listado",
                        "/categoria/listado",
                        "/articulo/listado",
                        "/usuario/nuevo")
                .hasRole("ADMIN")
                .antMatchers("/")
                .hasAnyRole("ADMIN","USER")
                .and()
                .formLogin()
                .loginPage("/login")
                .and()
                .exceptionHandling()
                .accessDeniedPage("/errores/403");
    }
}

# ¿Qué es y cómo funciona el elemento \<RouterOutlet>?
**\<router-outlet>** es una etiqueta especial que contiene angular donde mostrará el contenido de las páginas enrutadas, o sea, si la ruta es lista de vinos en la sección **\<router-outlet>** nos mostrará la lista de vinos, si cambiamos a registro de usuarios, nos mostraría la información del componente enrutado resgitro de usuario.
~~~
<div class="links">
  <span><a routerLink="/login" routerLinkActive="active">Login</a></span>
  <span><a routerLink="/register" routerLinkActive="active">Register</a></span>
  <span><a routerLink="/stocks/list" routerLinkActive="active">Stock List</a></span>
  <span><a routerLink="/stocks/create" routerLinkActive="active">Create Stock</a></span>
</div>
<router-outlet></router-outlet>
~~~
![router-outlet](img/router-outlet.png)

![router-outlet](img/router-outlet2.png)

# ¿Para qué se utilizan las directivas routerLink y routerLinkActive? ¿Existen más directivas relacionadas con el router?

Normalmente para crear un enlace utilizamos la etiqueta **\<a>** pero al realizar una pàgina tipo SPA no es del todo correcto porqué cada vez que damos a un enlace obligamos a cargar la página entera.
Angular ofrece una solución, en vez de utilizar la etiqueta **\<a>**, utilizamos la etiqueta **\<routerlink>** hace la misma fiunción que la **\<a>** pero no obliga a recargar de nuevo la página.
También existe **routeractivelink** que podemos asociar una clase CSS para decorar un link activo.

**RouterLinkWithHref**

# ¿Qué diferencias hay entre los servicios Router y ActivatedRoute? ¿Qué funcionalidades tiene cada uno de estos servicios? Describe algunos de los métodos más importantes por los que están compuestos.

sflsñ


# ¿Qué son las Route Guards? ¿Cómo se usan las guardas en Angular? Describe todas las guardas que existen en Angular (consulta para ello la documentación oficial de Angular)

Las **guards** sirven para protejer ciertas rutas o eventos producidos por un cambio de ruta de nuestro proyecto, vamos a ver un ejemplo sencillo:

## El primer paso serà generar un **guard**

~~~
ng g guard guards/usuarioIdentificado
~~~

Esto genera unos archivos con su clase guard dentro



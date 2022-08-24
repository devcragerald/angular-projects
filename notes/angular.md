# Angular

Las aplicaciones hechas en Angular tiene casi todo lo que necesita por lo que no necesita paquetes de terceros.

Con base en JS/TS la curva de aprendizaje se hace más corca.

Muchas de las herramientas dentro del proyecto de Angular no van al bundle por lo que no llega a pesar demasiado.

----

- Angular es un framework (marco de trabajo estandarizado).
- Normalmente Angular presenta todas las herramientas que se necesita para desarrollar la app.
- Es modular.
- Bloques:
    - Componentes: tiene segmentos HTML y clase de TS con su decorador. Siendo bloques de código lo más simple posible.

    - Rutas: diferentes componentes que se puede mostrar dependiendo de la ruta del cliente

    - Directivas: de componente, estructurales (ngFor, ngIf), atributos

    - Servicios: lugares centralizados de información <---> Redux

    - Módulos: agrupa los bloques, incluso otros módulos

Angular actualiza sólo los elementos del HTML que necesitan ser actualizados, no actualiza todos ya que es capaz de ver qué elementos son los que han sufrido cambios y actualizarlos por el **One Way Data Binding**

**En el HTML se usa `()` para emitir/escuchar eventos**

### Directiva estructurales
----
Necesario importar `CommonModule`

#### ngFor
#### ngIf

### Data binding
----

#### [] One way Data binding
    - Indica que el valor de la propiedad del elemento HTML será un valor del componente

#### [ () ] Two way Data binding
    - Obtiene el valor de la clase y desde el HTML se puede modificar

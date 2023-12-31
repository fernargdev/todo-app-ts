## Inter:

1. Fue necesario despues de instalar el inter y como estoy usando standard tube que configurar algunas cosas para que se llevara bien con ts, ya que standard por defecto es para js
2. Parece ser que el inter no tiene bien algunas reglas sobre todo en cuanto a tipado
3. Tengo problemas con el inter las importaciones de tipos aunque no ponga el type me deja hacerlas, lo cual esta mal

## Inter vs Prettier:

1. Inter da errores en el codigo, para que no cometas errores
2. Prettier es para el estilo del codigo, para que sigas un mismo estilo

## Bugs:

1. Tenia que poner este import import 'todomvc-app-css/index.css' y habia puesto este import 'todomvc-app-css'
2. Error en los nombres de las clases que importo
3. Error de propdrilling

## JSX.Element vs React.FC:

1. El React.FC le puedes pasar las props tipadas por que con React.FC(Funcional Component) lo que estas haciendo es tipar la funcion
2. JSX.Element no se le pueden tipar las props por que lo que estas haciendo con esto es tipar lo que devuelve la funcion

## Trucos de Devs:

1. Llamar al fichero types.d.ts, se le pone .d para saber de forma visual que ese archivo solo contiene las declaraciones, no contiene codigo.

## PropDrilling:

1. Tengo un error por props drilling, estoy pasando la funcion de borrar, desde App, hasta Todo que seria el nieto, pero como es solo un nivel, es algo menor.
2. Se podria arreglar facil con useContext pero en casos asi no vale la pena
3. El drilling parece repetirse a lo largo de la app, deberia arreglarlo con algun forma de manejar estado global

## TypeScript:

1. Se usan types para atributos por separados y interface para objetos y otras extructuras mas complejas

2. En ts puedo hacer esto:

```
export interface Todo {
  id: string
  title: string
  completed: boolean
}

// export type TodoId = Omit<Todo, 'title' | 'completed'>
export type TodoId = Pick<Todo, 'id'>
```

- Con esto logro exportar un atributo especifico de una interfaz, se pueden hacer omitiendo con el Omit como en el primer caso o seleccionando con el Pick como en el segundo caso

Despues se pueden usar donde se desee como en este caso:

```
 const handleRemove = ({ id }: TodoId): void => {}
```

- Hago esto: {id} porque estoy usando parametros nombrados en esta funcion

### Filters + literal + href:

- Codigo:

```
consts.ts:
export const TODO_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed',
} as const

export const FILTERS_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    literal: 'Todos',
    href: `/?filter=${TODO_FILTERS.ALL}`,
  },
  [TODO_FILTERS.ACTIVE]: {
    literal: 'Activos',
    href: `/?filter=${TODO_FILTERS.ACTIVE}`,
  },
  [TODO_FILTERS.COMPLETED]: {
    literal: 'Completados',
    href: `/?filter=${TODO_FILTERS.COMPLETED}`,
  },
}

```

- Logica:

Este código TypeScript define dos constantes TODO_FILTERS y FILTERS_BUTTONS.

TODO_FILTERS es un objeto con tres propiedades: ALL, ACTIVE y COMPLETED. Cada propiedad tiene un valor de cadena que representa un estado de una tarea (todo). La declaración as const al final asegura que TODO_FILTERS es un objeto de solo lectura, lo que significa que sus propiedades no pueden ser modificadas después de la asignación inicial.

FILTERS_BUTTONS es un objeto que utiliza las propiedades de TODO_FILTERS como claves. Cada clave en FILTERS_BUTTONS es un objeto con dos propiedades: literal y href.

literal: Es una cadena que representa el texto que se mostrará en el botón del filtro. Por ejemplo, para tareas completadas, el texto del botón será ‘Completados’.

href: Es una cadena que representa el enlace al que se redirigirá al usuario cuando haga clic en el botón del filtro. Este enlace incluye un parámetro de consulta filter que tiene el valor de la propiedad correspondiente de TODO_FILTERS. Por ejemplo, para tareas completadas, el enlace será /?filter=completed.

En resumen, este código define los estados de las tareas y proporciona una manera de crear botones de filtro con enlaces correspondientes para cada estado

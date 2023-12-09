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

## TypeScript:

1. Se usan types para atributos por separados y interface para objetos y otras extructuras mas complejas

## JSX.Element vs React.FC:

1. El React.FC le puedes pasar las props tipadas por que con React.FC(Funcional Component) lo que estas haciendo es tipar la funcion
2. JSX.Element no se le pueden tipar las props por que lo que estas haciendo con esto es tipar lo que devuelve la funcion

## Trucos de Devs:

1. Llamar al fichero types.d.ts, se le pone .d para saber de forma visual que ese archivo solo contiene las declaraciones, no contiene codigo.

## PropDrilling:

1. Tengo un error por props drilling, estoy pasando la funcion de borrar, desde App, hasta Todo que seria el nieto, pero como es solo un nivel, es algo menor.
2. Se podria arreglar facil con useContext pero en casos asi no vale la pena

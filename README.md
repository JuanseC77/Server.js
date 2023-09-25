# Server.js
Cuando decidí utilizar async/await, noté algunas ventajas importantes:

Código más legible: Al declarar funciones como asincrónicas con async y usar await dentro de ellas, el código se volvió mucho más legible. Parecía casi como escribir código síncrono, lo que facilitó su comprensión.

Espera de promesas: El uso de await permitió que la ejecución de mi código se pausara hasta que las promesas se resolvieran o rechazaran. Esto hizo que mi código fuera más fácil de seguir, ya que fluía de manera más lineal.

Manejo de errores: La combinación de try/catch con async/await facilitó mucho el manejo de errores. Pude atrapar y gestionar excepciones de una manera que se asemejaba a la programación síncrona.

Uso del método then()
Por otro lado, también exploré el enfoque tradicional de manejo de promesas utilizando el método then(). Aquí están mis observaciones:

Encadenamiento de promesas: El método then() me permitió encadenar múltiples promesas de manera eficiente. Sin embargo, noté que esto podía llevar a un código más anidado y menos claro, especialmente cuando tenía muchas promesas encadenadas.

Manejo de errores: Utilicé el método catch() o la segunda función de then() para manejar errores. Aunque esto funciona, a veces encontré que la estructura de manejo de errores no era tan clara como con async/await.

Sintaxis menos intuitiva: En general, encontré que la sintaxis con el método then() era menos intuitiva en comparación con async/await. A veces, seguía la lógica de encadenamiento con dificultad.

Diferencias que descubrí
Al comparar async/await con el método then(), noté algunas diferencias clave:

Legibilidad: async/await resultó en un código más legible y fácil de entender, ya que se asemeja a la programación síncrona. El método then() puede dar lugar a un código más anidado y menos claro en mi experiencia.

Manejo de errores: async/await permitió el uso de try/catch, lo que simplificó el manejo de excepciones. El método then() requirió la utilización de catch() o una segunda función de then(), lo que a veces me pareció menos claro.

Encadenamiento: El método then() resultó más adecuado cuando necesitaba encadenar muchas promesas de manera eficiente. Sin embargo, async/await sigue siendo útil para secuencias de tareas asincrónicas.
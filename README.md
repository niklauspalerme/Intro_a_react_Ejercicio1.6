# Intro_a_react_Ejercicio1.6

***Unicafe, paso 5***

Continuemos refactorizando la aplicación. Extraiga los dos componentes siguientes:

- Button para definir los botones utilizados para enviar comentarios
- Statistics para mostrar una única estadística, por ejemplo, la puntuación media.
Para ser claros: el componente Statistics siempre muestra una única estadística, lo que significa que la aplicación utiliza varios componentes para representar todas las estadísticas:


const Statistics = (props) => {
  /// ...
  return(
    <div>
      <Statistic text="good" value ={...} />
      <Statistic text="neutral" value ={...} />
      <Statistic text="bad" value ={...} />
      // ...
    </div>
  )
}


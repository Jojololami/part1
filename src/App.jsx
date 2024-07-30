const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamental of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    },
  ]
  const totalExercises = parts[0].exercises + parts[0].exercises + parts[0].exercises;
 
  return (
    <div>
    <Header course={course} />
    <Content parts={parts} />
    <Total totalExercises={totalExercises} />
    </div>
   
  )
}

const Header = ({course}) => {
  return (
    <>
      <h1>{course}</h1>
    </>
  )
}

const Part = ({part}) => {
  return (
    <>
    {part.name} {part.exercise}
    </>
  )
}

const Content = ({parts}) => {
  return (
    <>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
    </>
  )
}

const Total = ({totalExercises}) => {
  return (
    <>
      <p>Number of exercises {totalExercises}</p>
    </>
  )
}

export default App
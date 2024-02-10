import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'

function App() {
  const actor = [
    'Sakib', 'Raj', 'Tanvir', 'Rubel'
  ];

  const books = [
    {id: 1, name: 'Physics', price: 100},
    {id: 2, name: 'Math', price: 100},
    {id: 3, name: 'Chemistry', price: 100},
    {id: 4, name: 'English', price: 100},
  ]

  const singers = [
    { id: 1, name: 'Zunayed Evan', age: 35 },
    { id: 2, name: 'James', age: 50 },
    { id: 3, name: 'Ayub Bacchu', age: 55 },
    { id: 4, name: 'Tasrif Khan', age: 27 },
  ]

  return (
    <>
      <h1>Vite + React</h1>

      <BookStore books={books}></BookStore>

      {
        singers.map(singer => <Singer singer={singer}>
        </Singer>)
      }
      <Actor name={"Shahriar"}></Actor>
      {
        actor.map(actor => <Actor name={actor}></Actor>)
      }
      {/* <Todo task="Learn react"
        isDone={true}>
      </Todo>
      <Todo task="core concept"
        isDone={false}>
      </Todo>
      <Todo task="try JSX"
        isDone={true}>
      </Todo> */}
      {/* <Device name= "Laptop" price= "55k"></Device>
      <Device name= "Mobile" price= "23k"></Device>
      <Device name= "watch" price= "3k"></Device>
      <Device></Device>
     <Person></Person>
     <Student grade = "7" score= "99"></Student>
     <Student></Student>
     <Student></Student>
     <Developer></Developer> */}

    </>
  )
}

function Device(props) {
  // console.log(props)
  return <h2>This device : {props.name} price : {props.price} </h2>
}
function Person() {
  const age = 33;
  const person = { name: 'Tanjil', age: 24 }
  return <h2>I am a {person.name} with age: {age}</h2>
}

const { grade, score } = { grade: '7', score: '99' };

function Student({ grade, score }) {
  console.log(props)
  return (
    <div className='student'>
      <h3>This is student</h3>
      <p>class: {grade} </p>
      <p>score: {score} </p>
    </div>
  )
}
function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '10px'
  }
  return (
    <div style={developerStyle}>
      <h5>Devoooo</h5>
      <p>coding: </p>
    </div>
  )
}
export default App

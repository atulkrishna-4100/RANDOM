import './App.css'
// import Contact from './components/contact'
import Header from './components/Header'
import Entry from './components/Entry'
// import Joke from  './components/Joke'
import data from './data.js'

// function App() {
//   return (
//     <div className='container'>
//       <Contact
//         img = "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
//         name = "Mr. Whiskerson"
//         phone = "(212) 555-1234"
//         email = "mr.whiskaz@catnap.meow"
//       />
//       <Contact
//         img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlVTWL4dqk9ZokaiRQe0kdV3_dNvkB7A3xTw&s"
//         name = "Fluffykins"
//         phone = "(212) 555-2345"
//         email = "fluff@me.com"
//       />
//       <Contact
//         img = "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//         name = "Felix"
//         phone = "(212) 555-4567"
//         email = "thecat@hotmail.com"
//       />
//       <Contact
//         img = "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//         name = "Pumpkin"
//         phone = "(212) 555-5682"
//         email = "pumpkin@scrimba.com"
//       />
//     </div>
//   )
// }

// function App() {
//   return (
//     <>
//       <Joke
//         setup = "I got my daughter a fridge for her birthday."
//         punchline = "I can't wait to see her face light up when she opens it."
//       />
//       <Joke
//         setup = "How did the hacker escape the police?"
//         punchline = "He just ransomware!"
//       />
//       <Joke
//         setup = "Why don't pirates travel on mountain roads?"
//         punchline = "Scurvy."
//       />
//       <Joke
//         setup = "Why do bees stay in the hive in the winter?"
//         punchline = "Swarm."
//       />
//       <Joke
//         setup = "What's the best thing about Switzerland?"
//         punchline = "I don't know, but the flag is a big plus!"
//       />
//     </>
//   )
// }

function App() {

  const entryElements = data.map((entry) => {
    return (
      <Entry
        img={entry.img}
        title = {entry.title}
        country = {entry.country}
        googleMapsLink = {entry.googleMapsLink}
        dates = {entry.dates}
        text = {entry.text}
      />
    )
  })

  return (
    <>
      <Header />
      <main className="container">
        {entryElements}
      </main>
    </>
  )
}

export default App

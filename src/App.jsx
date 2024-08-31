import Card from './compoment/card'
import './App.css'


function App() {
  let card=
    [
      {  label:"Saiu digitals", 
        image:"./img/dig.png",
        pricelabel:"Free",
        list1:"Your logo",
        list2:"Functionaries",
        list3:"Breaking limit",
        duration:""
      },
    {
        label:"Lol ventures" ,
        image:"./img/digitas.png",
        pricelabel:"$45",
        list1:"Your logo",
        list2:"Exchange",
        list3:"Appreciation",
        duration:'/year'
      },
      {
        label:"Cloud rentals", 
        image:"./img/gg.png",
        pricelabel:"$52",
        list1:"Your logo",
        list2:"Plumbline",
        list3:"Management",
        duration:'/year'
      }

    ]
   
    return(
     <>
      <div className='plancon'>
          <h2 className='center plan'>Choose Your plan</h2>
        <div className="flex">
          <p className='center Lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea assumenda, expedita exercitationem fuga veritatis iste autem. Nihil nulla odio, nostrum voluptas dolore quod sed hic, perspiciatis totam recusandae tempora!</p>
        </div>
      </div>
      
        <div className='card-container'>
        {card.map(card=>{
          return(
            <Card key={card.label}
              label={card.label}
              image={card.image}
              pricelabel={card.pricelabel}
              list1={card.list1}
              list2={card.list2}
              list3={card.list3}
              duration={card.duration}
            />
            
          )
        })}
        </div>
        {/* <Card
          label="Saiu digitals" 
          image="./img/dig.png"
          pricelabel="$50/year"
          list1="Your logo"
          list2="Functionaries"
          list3="Breaking limit"
        />
        <Card
          label="Lol ventures" 
          image="./img/digitas.png"
          pricelabel="$45/year"
          list1="Your logo"
          list2="Exchange"
          list3="Appreciation"
        />
        <Card
          label="Cloud rentals" 
          image="./img/gg.png"
          pricelabel="$52/year"
          list1="Your logo"
          list2="Plumbline"
          list3="Management"
        /> */}
       
     </>
    )
}

export default App

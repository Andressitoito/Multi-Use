import { CardMapButtons } from './CardMapButton'
import './MapButtons.scss'

const MapButtons = () => {

 const buttons = [
  {
   id: 4,
   title: "Default Button",
   description: "Button without styles, the basic one that gives us html 😢",
   stars: 0,
   style: {},
  },
  {
   id: 1,
   title: "Success Button",
   description:
    "Usually used to show the user that it is a button that can do positive actions - example => save",
   stars: 3,
   style: {
    backgroundColor: "green",
    color: "white",
    border: "none",
    padding: "10px 15px",
    cursor: "pointer",
    borderRadius: "3px",
   },
  },
  {
   id: 2,
   title: "Danger Button",
   description:
    "Usually used to show the user that it is a button that can do dangerous actions",
   stars: 3,
   style: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "10px 15px",
    cursor: "pointer",
    borderRadius: "3px",
   },
  },
  {
   id: 3,
   title: "Rounded Button",
   description: "Generally the most used on the entire web",
   stars: 5,
   style: {
    backgroundColor: "#525252",
    color: "white",
    border: "none",
    padding: "10px 15px",
    cursor: "pointer",
    borderRadius: "50px",
    "button:hover": {
     backgroundColor: "blue",
    },
   },
  },
  {
   id: 5,
   title: "Ghost Button",
   description:
    "Excellent button, which does not have the necessary recognition :(",
   stars: 4,
   style: {
    backgroundColor: "transparent",
    color: "black",
    border: "1px solid #525252",
    padding: "10px 15px",
    cursor: "pointer",
    borderRadius: "3px",
   },
  },
  {
   id: 6,
   title: "Circle Button",
   description: "Rare to see and sometimes it breaks our style",
   stars: 1,
   style: {
    backgroundColor: "blue",
    color: "white",
    border: "none",
    padding: "10px 15px",
    cursor: "pointer",
    borderRadius: "100%",
    width: "75px",
    height: "75px",
   },
  },
  {
   id: 7,
   title: "Gradient Button",
   description:
    "The rarest to see but if we know how to use it, it will give us a plus on our page",
   stars: 3,
   style: {
    background: "linear-gradient(to right, #67b26b, #4ca2cb)",
    color: "white",
    border: "none",
    padding: "10px 15px",
    cursor: "pointer",
    borderRadius: "3px",
    width: "100%",
   },
  },
  {
   id: 8,
   title: "Contrast Button",
   description: "Simple but efficient",
   stars: 4,
   style: {
    backgroundColor: "black",
    color: "white",
    border: "none",
    padding: "10px 15px",
    cursor: "pointer",
    borderRadius: "3px",
    width: "50%",
   },
  },
  {
   id: 9,
   title: "Super Button",
   description: "The most used button on the web",
   stars: 5,
   style: {
    color: "#1cc49d",
    backgroundColor: "#1b2f31",
    borderRadius: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "3em",
    width: "8em",
    fontSize: "large",
    fontWeight: 600,
    outline: "none",
    border: "none",
   },
  },
  {
   id: 10,
   title: "Bootstrap Button",
   description: "The most used button on the web",
   stars: 2,
   style: {
    border: 0,
    textAlign: "center",
    display: "inline-block",
    padding: "14px",
    width: "150px",
    margin: "7px",
    color: "#fff",
    backgroundColor: "#36a2eb",
    borderRadius: "8px",
    fontFamily: ' "proxima-nova-soft", sans-serif',
    fontWeight: 600,
    textDecoration: "none",
    transition: "box-shadow 200ms ease-out",
   },
  },
 ]

 return (
  <div className='MapButton'>

   {
    buttons.map(button => {
     return <CardMapButtons
      key={button.id}
      title={button.title}
      description={button.description}
      stars={button.stars}
      style={button.style}
     />
    })
   }

  </div>
 )
}

export { MapButtons };
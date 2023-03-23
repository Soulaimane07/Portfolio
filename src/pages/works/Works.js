import './Works.css'
import { useEffect, useState } from 'react'
import Website from './Templates/Website'
import App from './Templates/App'

function Works() {

  useEffect(()=>{
    window.scroll(0,0)
  }, [])

  const [cat, setCat] = useState("Sweb")

  const buttons = [
    {
        "title": "Web sites",
        "cat": "Sweb"
    },
    {
        "title": "Web Apps",
        "cat": "Aweb"
    },
    {
        "title": "Mobile Apps",
        "cat": "app"
    },
  ]

  const work = [
    {
        "cat": "Sweb",
        "title":"Streamming application V3",
        "text":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        "extantions":[
            {
                "title":"React js",
                "icon":"/images/react.png"
            },
            {
                "title":"Json",
                "icon":"/images/json.png"
            },
            {
                "title":"HTML",
                "icon":"/images/html.png"
            },
            {
                "title":"CSS",
                "icon":"/images/css.png"
            }
        ],
        "image":"/images/websites/hulu2.png",
        "date":"06-12-2022",
        "link":"https://ornate-figolla-336262.netlify.app",
        get body(){ return <Website data={this} /> },
    },
    {
        "cat": "Sweb",
        "title":"My Portfolio",
        "text":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        "extantions":[
            {
                "title":"React js",
                "icon":"/images/react.png"
            },
            {
                "title":"Json",
                "icon":"/images/json.png"
            },
            {
                "title":"HTML",
                "icon":"/images/html.png"
            },
            {
                "title":"CSS",
                "icon":"/images/css.png"
            },
            {
                "title":"Tailwind",
                "icon":"/images/tailwind.png"
            }
        ],
        "image":"/images/websites/portfolio.png",
        "date":"03-11-2022",
        "link":"https://hilarious-llama-994120.netlify.app",
        get body(){ return <Website data={this} /> },
    },
    {
        "cat": "Sweb",
        "title":"Streamming application V2",
        "text":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        "extantions":[
            {
                "title":"React js",
                "icon":"/images/react.png"
            },
            {
                "title":"TMDB API",
                "icon":"/images/tmdb.png"
            },
            {
                "title":"HTML",
                "icon":"/images/html.png"
            },
            {
                "title":"CSS",
                "icon":"/images/css.png"
            }
        ],
        "image":"/images/websites/huluapi.png",
        "date":"26-10-2022",
        "link":"https://stirring-kelpie-c4944b.netlify.app",
        get body(){ return <Website data={this} /> },
    },
    {
        "cat": "Sweb",
        "title":"Streamming application V1",
        "text":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        "extantions":[
            {
                "title":"React js",
                "icon":"/images/react.png"
            },
            {
                "title":"HTML",
                "icon":"/images/html.png"
            },
            {
                "title":"CSS",
                "icon":"/images/css.png"
            }
        ],
        "image":"/images/websites/hulu1.png",
        "date":"04-10-2022",
        "link":"https://guileless-snickerdoodle-b0b217.netlify.app",
        get body(){ return <Website data={this} /> },
    },
    {
        "cat": "Sweb",
        "title":"Syndico - Front -",
        "text":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        "extantions":[
            {
                "title":"React js",
                "icon":"/images/react.png"
            },
            {
                "title":"Json",
                "icon":"/images/json.png"
            },
            {
                "title":"HTML",
                "icon":"/images/html.png"
            },
            {
                "title":"CSS",
                "icon":"/images/css.png"
            },
            {
                "title":"Bootstrap",
                "icon":"/images/Bootstrap.png"
            }
        ],
        "image":"/images/websites/syndico.png",
        "date":"20-08-2022",
        "link":"https://mellow-valkyrie-662660.netlify.app",
        get body(){ return <Website data={this} /> },
    },
    {
        "cat": "Aweb",
        "title":"Syndico - Back -",
        "text":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        "extantions":[
            {
                "title":"Laravel",
                "icon":"/images/laravel.png"
            },
            {
                "title":"HTML",
                "icon":"/images/html.png"
            },
            {
                "title":"CSS",
                "icon":"/images/css.png"
            },
            {
                "title":"Bootstrap",
                "icon":"/images/Bootstrap.png"
            }
        ],
        "image":"/images/websites/syndicoB.png",
        "date":"20-08-2022",
        "link":"http://127.0.0.1:8000/",
        get body(){ return <Website data={this} /> },
    },
    {
        "cat": "Sweb",
        "title":"Streamming application V0",
        "text":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        "extantions":[
            {
                "title":"React js",
                "icon":"/images/react.png"
            },
            {
                "title":"Json",
                "icon":"/images/json.png"
            },
            {
                "title":"HTML",
                "icon":"/images/html.png"
            },
            {
                "title":"CSS",
                "icon":"/images/css.png"
            }
        ],
        "image":"/images/websites/hulu.png",
        "date":"10-04-2022",
        "link":"https://peaceful-chaja-d4c127.netlify.app",
        get body(){ return <Website data={this} /> },
    },
    {
        "cat": "Sweb",
        "title":"Disney App",
        "text":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        "extantions":[
            {
                "title":"React js",
                "icon":"/images/react.png"
            },
            {
                "title":"Json",
                "icon":"/images/json.png"
            },
            {
                "title":"HTML",
                "icon":"/images/html.png"
            },
            {
                "title":"CSS",
                "icon":"/images/css.png"
            }
        ],
        "image":"/images/websites/disney.png",
        "date":"12-12-2021",
        "link":"https://epic-elion-69aeb1.netlify.app",
        get body(){ return <Website data={this} /> },
    },
    {   
        "cat":"app",
        "title": "Health Manager",
        "text":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        "extantions":[
            {
                "title":"React Native",
                "icon":"/images/react.png"
            },
            {
                "title":"Json",
                "icon":"/images/json.png"
            }
        ],
        "image":"/images/HM.jpg",
        "date":"10-03-2023",
        get body(){ return <App data={this} />}
    }
  ]

  return (
    <div className='works'>
        <div className='categories'>
            {buttons.map((item,key)=>(
                <button key={key} onClick={()=> setCat(item.cat)} className={`catBtn ${cat === item.cat && 'active'}`}>
                    {item.title}
                </button>
            ))}
        </div>

        {work.map((item,key)=>(
            cat === item.cat && item.body
        ))}
        
    </div>
  )
}

export default Works
import style from './index.module.css'

function Knowledge (props) {

    return (
    <section className = {style.knowledge}>
        <h1 className = {style.title}>Knowledge</h1>
        <ul className = {style.list}>
             {
                props.attributes.map((item) => {
                    return <li 
                            className = {style.item} 
                            key = {item} 
                            style = {{item}}>
                                I know: {item} 
                        </li>
                    }) 
             }
             </ul>
        </section>
      );
    }
  
  export default Knowledge;
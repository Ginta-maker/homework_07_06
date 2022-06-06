import style from './index.module.css'

function Users(props) {

return (
<section className = {style.users}>
    <h1 className= {style.title}>Users</h1>
    <ul className= {style.list}>
         {
            props.names.map((item) => {
                return <li 
                        className = {style.users} 
                        key = {item} 
                        style = {{item}}>
                            Hello, {item} !
                    </li>
                }) 
         }
         </ul>
    </section>
  );
}


export default Users;
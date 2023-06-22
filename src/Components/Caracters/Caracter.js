import "./Caracter.css"

export default function Caracter(props) {

    return (
        <>
            <li>
                <div className="container-grid">
                    <span className="name name-color">{props.pseudo}</span>
                    
                    <span className="class">{props.classe}</span>
                    <span className="age">{props.age} ans</span>
                    <div className="btn-delete">
                        <button className="btn btn-danger" onClick={() => (props.deleteCaracter(props.id))}>Delete</button>
                    </div>                  
                </div>            
            </li>
        </>
    )
}
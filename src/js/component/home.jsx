import React,{useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	
	const [Color, setColor]=useState("");

	return (
		<div  className="semaforo">
			<div onClick={() => setColor("rojo")} className={"luz rojo "+(Color==="rojo"? "encendido1":"")}></div>
			<div onClick={()=>setColor("amarillo")} className={"luz amarillo "+(Color==="amarillo"?"encendido":"")}></div>
			<div onClick={()=>setColor("verde")} className={"luz verde "+(Color==="verde"?"encendido2":"")}></div>
		</div>
	);
};

export default Home;

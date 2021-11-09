import React from "react";
import Main from "../components/Main";
import About from "../components/About";
import Services from "../components/Services" ;
import Contact from "../components/Contact" ;

function App(){
	return(
		<React.Fragment>
			<Main />
			<About />
			<Services />
			<Contact />
		</React.Fragment>
	)
}
export default App;

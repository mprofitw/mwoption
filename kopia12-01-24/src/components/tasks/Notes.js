// import React, { Component } from "react";
// const notka =()=>{
//     return <p>{this.props.notes}</p>
// }
// class Notes extends Component {
  
// render() {
//     if(!this.props.showNotes){
//         return null;
//     }
//     return(
//         <>
//         <h1>Notes zawartość</h1>
//         <p>{notka}</p>
//         </>
//     )
// }
// }
// export default Notes;
const Notes = (props) => {
        if(!props.showNotes){
        return null;
    }
    return ( 
        <>
        <h1>Notes zawartość</h1>
        {/* <p>{this.props.notes}</p> */}
        </>
     );
}
 
export default Notes;
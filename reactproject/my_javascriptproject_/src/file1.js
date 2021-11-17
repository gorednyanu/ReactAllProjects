import React, { Component } from "react";
    class file1 extends Component {
         mes(event) {
            console.log("Wel Come to javascript");
        }
        render() {
              return(
                <div >
                <button label="Save" onClick={this.mes}>onClick</button>  
                </div>
              );
            }
        }
    export default file1;
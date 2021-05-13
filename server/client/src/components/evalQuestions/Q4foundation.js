import React from 'react';

export default class Q4foundation extends React.Component{
    render(){
        if(this.props.flag) {
            return (
                <div>
                <label htmlFor="foundation">Is your company already founded?</label><br/>
                    <input type="radio" id="yes" name="foundation" value="yes"/>
                    <label for="yes">Yes</label><br/>

                    <input type="radio" id="no" name="foundation" value="no"/>
                    <label for="no">No</label><br/>
                </div>
                )
        } else {
            return (
            <>
            </>
             )
          }
      }     
}




   
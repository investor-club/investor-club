import React from 'react';

export default class Q5teamMember extends React.Component{
    render(){
        if(this.props.flag) {
            return (
                <div>
                    <label htmlFor="foundation">How many core team members do you have?</label><br/>
                    <input type="radio" id="1" name="teamMembers" value="1"/>
                    <label for="1">1</label><br/>

                    <input type="radio" id="2" name="teamMembers" value="2"/>
                    <label for="2">2</label><br/>

                    <input type="radio" id="3" name="teamMembers" value="3"/>
                    <label for="3">3</label><br/>

                    <input type="radio" id="4" name="teamMembers" value="4"/>
                    <label for="4">4</label><br/>

                    <input type="radio" id="5orMore" name="teamMembers" value="5orMore"/>
                    <label for="5orMore">5 or more</label><br/>
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
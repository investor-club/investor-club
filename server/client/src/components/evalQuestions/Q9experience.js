import React from 'react';

export default class Q9experience extends React.Component{
    render(){
        if(this.props.flag) {
            return (
                <div>
                    <label htmlFor="foundation">Did you found a startup before?</label><br/>
                    <input 
                    type='text'
                    id='experience'
                    name='experience'
                    // value=
                    // onChange=
                    />
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





import React from 'react';

export default class Q2industry extends React.Component{
    render(){
        if(this.props.flag) {
            return (
                <div>
                <label htmlFor="industry">In which industry are you operating?</label><br/>
                <input 
                    type='text'
                id='industry'
                name='industry'
                placeholder='q2'
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



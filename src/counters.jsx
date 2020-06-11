import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    state = { 
        counters: [{id:1, value:0},
            {id:2, value:4},
            {id:3, value:0},
            {id:4, value:0}
        ]
     };
    handleIncrement=counter=>{
        console.log(counter);
        const counters=[...this.state.counters];
        const index=counters.indexOf(counter);
        counters[index]={...counter};
        counters[index].value++;
        this.setState({counters});
        //counters[0].value++; never do this
        //console.log(this.state.counters[0]);
    };

    handleDelete=counterId=>{
         console.log('Event handler called',counterId);
         const counters=this.state.counters.filter(c=>c.id!==counterId);
         this.setState({counters});
     };
     //this needs a single source of truth, we have to remove value from counter , we use a controlled component
     handleReset=()=>{//This has to have a single set of truth
         const counters=this.state.counters.map(c=>{
             c.value=0;
             return c;                                    
         });
         this.setState({counters})
     };
    render() { 
        console.log('props',this.props)//props show // selected to true but by default its true
        return ( <div>
            <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
            {this.state.counters.map(counter=>
            <Counter 
                key ={(counter.id)} //internally by react
                onDelete ={this.handleDelete} 
                onIncrement={this.handleIncrement}
                counter={counter}//instead of value and id, we wll keep acccumalting props lets just keep this one, see how i added prop.counter.id/vlaue everywhere
                //value={counter.value} 
                //id={counter.id} //this is for us
                >
                 <h4>Counter #{counter.id}</h4> </Counter>)}
            
        </div> );
    }
}
 
export default Counters;
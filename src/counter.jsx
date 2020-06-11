import React, { Component } from 'react'; //type imrc (component class is imported here)
//just type cc
class Counter extends Component {
    // state={// has any datav ur component needs, address, count anything
    //     //count: 0,
    //     count :this.props.counter.value, //lets us set these values from the outside, this is the vlue we get from our props, so we need a single source of truth
    //     imageUrl: 'https://picsum.photos/200',
    //     tags:['tag1','tag2','tag3']
    // };//state is local so we use props to pass data, props is read only
    styles={
        fontSize: 50,
        fontWeight: 'bold'
        
    };// or just do style={{font: 30}}
    // renderTags() {
    //     if(this.state.tags.length===0) return <p>There are no tags</p>

    //     return  <ul>{this.state.tags.map(tags=><li key={tags}>{tags}</li>)}</ul>

    // }
    // constructor(){
    //     super();//this is constructor for component the parent class
    //     this.handleIncrement=this.handleIncrement.bind(this);
    //     //function in js are objects, so the above line make a instance in which this is referencing the current object, no matter how  u call. i make it equal to this.handleIncremement
    // } ctrl+k+c
    // handleIncrement=product=>{ //use this arrow to avoid contrstructor
    //     console.log(product);
    //     console.log('Incrememet clicked',this);
    //     //connot use this.stat.count++ as it doesnt update the value
    //     this.setState({count: this.state.count +1}) //this notifies react that we are changing the state

    //     //obj.method(); reference to object
    //     //stand alone function without an object reference ; standalone function are functions which are not a part of a class
    //     //so here u cant use this.function as here its stand alone
    // }

    //comment all anove to make a single source of truth
    render() { 
        console.log(this.props);
        console.log('props',this.props)//js object includes all attributes in counter componenets ecept  key which is a special attribute (uniqly identified)
        //ctrl+sfift+R makes  a function out of your selected code
        React.createElement('div')// can send only one so make a div or a reactFragment
        // in between {} u can write any javascript code , key is just uniquely giving them names. because it wants everythgin be uniquel identified
        return (
           
            <div>
              {this.props.children}
              {//this.state.tags.length===0 && 'PLease create new tag'
              }
              {//this.renderTags()
              }
              
              <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
              <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
              <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
        //In javascript && can be used for non boolean values so true and string,  will print string as it will convert it in truth
        //The component owning the poece of the state should be the one modifying it**
        //<span style={this.styles} className="badge badeg-primary m-2">{this.formatCount()}</span>
        /*      <img src={this.state.imageUrl}alt=""/>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button  className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button> */
        
    }
    
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
       // classes += (this.state.count === 0 ? "warning" : "primary");
       classes += (this.props.counter.value === 0 ? "warning" : "primary");
        return classes;
    }
    
    //add method to this class
    formatCount(){//we have a repetion of this.state.count so in curly declare counnt
        //const { count }= this.state 
        const { value }= this.props.counter
        return  /*this.state.count or*/ value === 0 ? 'Zero' : value; // i can literally use javascript as obhects here or save them as variables <h1>Zero</h1>
    }
}
 
export default Counter ; //exported it differently here
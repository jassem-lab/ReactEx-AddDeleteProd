import React, {Component} from 'react' ; 
import NavBar from './Components/navbar';
import Counters from './Components/counters'

class App extends Component {
    state =  {
        counters : [
            {id : 1, value : 0 } , 
            {id : 2, value : 0 } , 
            {id : 3, value : 0 } , 
            {id : 4, value : 0 } , 
        ]

    } ; 

    constructor(){
        super() ; 
        console.log('app-Constructor') ;
        
    }

    componentDidMount(){
        //ajax Call
        console.log('app-rendered'); 
    }

    handleIncrement = counter => {
        const counters = [...this.state.counters] ;  
        const index = counters.indexOf(counter) ; 
        counters[index] = {...counter } ; 
        counters[index].value++ ; 
        this.setState({counters}) ; 
    }


    handleDelete = (counterId) => {
        console.log('Event Handler Called ! ', counterId) ; 
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters}) ; 
    };

    render () {
        return(
            <React.Fragment>
               <NavBar totalCounters={this.state.counters.filter(c => c.value > 0 ).length} />
           <main className="container">
               <Counters counters={this.state.counters} onIncrement={this.handleIncrement} onDelete={this.handleDelete} />
           </main>
           </React.Fragment>

        );
    }
}
export default App ; 
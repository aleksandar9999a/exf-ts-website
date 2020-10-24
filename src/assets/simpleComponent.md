@CustomElement({ 
    selector: 'exf-app’ 
}) 
class App extends Component { 
    @Props() top: number = 0; 
    @State() bg: string = '#fff’; 
    name: string = ‘ExF’;

    stylize() { 
        return ( 
            <style> 
                app { 
                    { top: `${this.top}px` } 
                } 

                app { 
                    { 'background': this.bg } 
                } 
          </style> 
        ) 
    } 

    render() {
        return ( 
            <div className="app">
                <h1>{this.name}</h1> 

                <p>Current position is: {this.top}px</p> 
                <p>Current background is: {this.bg}</p> 
            </div> 
        ) 
    } 
} 
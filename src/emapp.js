// cd desktop/reactjs/projet1
// cd projet1 // live-server public
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

class IndecesionApp extends React.Component {
    constructor(props){
        super(props);
        this.handlePick = this.handlePick.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteSingleOption = this.handleDeleteSingleOption.bind(this)
        this.state = {
            options: props.options
        }
    }

    componentDidMount(){
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if(options){
            this.setState(()=>({options}))
        }
        
    }

    componentDidUpdate(preProps,preState){
        if(preState.options.length !== this.state.options.length){ 
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json)
        }
    }

    handlePick(){
        let a = Math.floor(Math.random()*this.state.options.length);
        alert(this.state.options[a])
    }
    
    handleRemove(){
        this.setState(() => ({ options: [] }))
    }

    handleDeleteSingleOption(option){
        this.setState((pre)=>({
            options: pre.options.filter((val)=>{
                return option !== val
            })
        }))
    }

    handleAddOption(option){
        if(!option){
            return 'Enter a valid value'
        }else if(this.state.options.indexOf(option) > -1 ){
            return 'this one already exists'
        }
        
        this.setState((pre) => ({options: pre.options.concat([option]) }))

    }

    render(){
        return (
            <div>
                <Header title = 'Indecesion'/>
                <Action hasOptions = {this.state.options.length > 0} pick = {this.handlePick}/>
                <Options options={this.state.options} handleDeleteSingleOption = {this.handleDeleteSingleOption}/>
                <AddOption handleAddOption = {this.handleAddOption}/>
                <RemoveAllButton remove = {this.handleRemove}/>
            </div>
        )
    }
} 

IndecesionApp.defaultProps = {
    options : [1,2,3,4,5,6]
}

const Header = (props) => {
    return <div><h1>{props.title}</h1></div>
}

const Action = (props) => {
    return <div><button onClick = {props.pick} disabled = {!props.hasOptions}>What should I do?</button></div>
}

const Options = (props) => {
    return (
        <div>
            <h3>Here is some options</h3>
            <ol>{props.options.map((val,index) => <Option key={index} optiontext={val} handleDeleteSingleOption={props.handleDeleteSingleOption}></Option>)}</ol>
        </div>
    )
}

const Option = (props) => {
    return (
            <li>{props.optiontext}<span> </span>
            <button 
                onClick={(e)=>{
                    props.handleDeleteSingleOption(props.optiontext)
                }}

            >remove</button>
            </li>   
        )
}

const RemoveAllButton = (props) => {
    return (
        <div>
            <button onClick={props.remove}>Remove</button>
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    
    handleAddOption(e){
        e.preventDefault();
        const optionadded = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(optionadded);
        
        this.setState(()=>({error}))

        e.target.elements.option.value = '';

        
    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type = 'text' name = 'option'></input>
                    <button >Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecesionApp />,document.getElementById('app'))
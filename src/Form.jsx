import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Form extends Component {
    characterData;
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    componentDidMount() {
        this.characterData = JSON.parse(localStorage.getItem('character'));
        if (localStorage.getItem('character')) {
            this.setState({
                name: this.characterData.name
            })
        } else {
            this.setState({
                name: ''
            })
        }
    }

    componentWillUpdate(nextState) {
        localStorage.setItem('character', JSON.stringify(nextState));
    }
    
    render() {

        const changeName = (e) => {
            this.setState({ name: e.target.value })
        }

        const handleSubmit = () => {
            this.props.history.push('/welcome');
        }

        return (
            <div>
                <h1>Define your character</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input type="text" onChange={changeName} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Form);
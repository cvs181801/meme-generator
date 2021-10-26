import React from 'react'

class Memegenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => {
                const memes = data.data.memes;
                console.log(memes)
                this.setState({allMemeImgs: memes})
                 })
    }

    handleChange(event) {
        const {name, value, type} = event.target
        this.setState({ [name]:value }) 
      }

    render(){
        {console.log(this.state.allMemeImgs)}
        return (
            <div>
                <form>
                    <input
                    type="text"
                    name="topText"
                    onChange={this.handleChange}
                    placeholder="Top Text"
                    value={this.state.topText}
                    ></input>

                    <input
                    type="text"
                    name="bottomText"
                    onChange={this.handleChange}
                    placeholder="Bottom Text"
                    value={this.state.bottomText}
                    ></input>
                    <button>Generate New Meme</button>
                </form>
            </div>
        )
    }
}

export default Memegenerator
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
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => {
                const memes = data.data.memes;
                    // const randomMemeTest = memes[5];
                    // console.log(randomMemeTest.url)
                this.setState({allMemeImgs: memes})
                 })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]:value }) 
      }

    handleSubmit(event) {
        event.preventDefault();
        const randomNum = Math.random() * 100;
        const randomNumRoundDown = Math.floor(randomNum);
        console.log(Math.floor(randomNumRoundDown));
        const newImage = this.state.allMemeImgs[randomNumRoundDown].url;
        this.setState({randomImage: newImage})
    }  

    render(){
        
        return (
            <div>
                <form
                    name="form"
                    onSubmit={this.handleSubmit}
                >
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
                    <button
                        type="submit"
                    >Generate New Meme</button>
                </form>
                <br/>
                    <div>
                        <p>{this.state.topText}</p> 
                            <img
                            src={this.state.randomImage}
                            alt="funny meme"
                            ></img>
                        <p>{this.state.bottomText}</p>
                    </div>
            </div>
        )
    }
}

export default Memegenerator
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
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => {
                //const [memes] = data
                console.log(data.data.memes[0])
                // this.setState({allMemeImgs: [memes]})
                 })
    }

    render(){
        return (
            <div>
                <p src={this.state.randomImage}>Random Image</p>
            </div>
        )
    }
}

export default Memegenerator
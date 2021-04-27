import React from 'react'

class ImageCard extends React.Component {
 
    constructor(props) {
        super(props);

        this.state = {spans : 0};

        this.imageRef = React.createRef();
    }

    componentDidMount(){
        // console.log(this.imageRef.current.clientHeight);
        this.imageRef.current.addEventListener('load',this.setSpans)
    }

    setSpans = () =>{
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);

        this.setState ({spans});
    }

    render() {
        const {description,urls} = this.props.image;

        return (
            <div style = {{ gridRowEnd:`span ${this.state.spans}` }}>
                {/* <img
                    alt = {this.props.image.description}
                    src = {this.props.image.urls.regular}
                >

                </img> ไม่มี const มีแค่ return*/}

                <img
                    ref = {this.imageRef}
                    alt = {description}
                    src = {urls.regular}
                >

                </img> 
            </div>
        )
    }
}

export default ImageCard;
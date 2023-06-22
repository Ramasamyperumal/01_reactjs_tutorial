import './HomePage.css';
import { Carousel } from 'antd';
const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

function HomePage() {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    return (
        <>

            <h2>Homepage</h2>

            <div>
                <Carousel afterChange={onChange}>
                    <div>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>
            </div>

            <p className="colorRed">HomePage content goes here...</p>

        </>
    )
}

export default HomePage;
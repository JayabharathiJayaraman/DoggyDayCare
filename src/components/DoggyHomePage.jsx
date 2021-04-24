
const TestButton = () => {
    console.log("test button click");
        let fetchApi = fetch('https://api.jsonbin.io/b/607eb43024143e5df089b745')
        console.log('fetch', fetchApi)
        

    return(
        <div>
        <div class="navbar">
        <a href="#utbildning">Home</a>
        <a href="#arbetslivserfarenhet">AboutUs</a>
        <a href="#arbetslivserfarenhet">Contact</a>
        </div>
        <div class="title">
            <h1>Dog DayCare</h1>
        </div>
        </div>
    )
}

export default TestButton;
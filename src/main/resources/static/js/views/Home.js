export default function Home(props) {
    console.log(props);
    fetch("http://localhost:8080/rpg/accounts").then(r => r.json()).then(d => console.log(d))
    return `
        <main class="col-10">
        <div style="max-height: 100vh; overflow: scroll;">
            <div style="height: 200px; background-color: blanchedalmond">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ducimus excepturi libero obcaecati officiis omnis voluptatem voluptates! Aliquid debitis eligendi facilis modi molestiae natus nisi rem, sint ut vero voluptatibus!
                </p>    
            </div>
            <div style="height: 200px; background-color: blanchedalmond">
                <p>
                    This is the home page text.
                </p>    
            </div>
            <div style="height: 200px; background-color: blanchedalmond">
                <p>
                    This is the home page text.
                </p>    
            </div>
            <div style="height: 200px; background-color: blanchedalmond">
                <p>
                    This is the home page text.
                </p>    
            </div>
            <div style="height: 200px; background-color: blanchedalmond">
                <p>
                    This is the home page text.
                </p>    
            </div>
        </div>
            
        </main>
    `;
}
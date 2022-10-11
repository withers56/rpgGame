export default function Home(props) {
    console.log(props);
    //language=html

    let html = `
        <main>
            ${(hasCharacter(props) ? 'has char' : 'doesnt have char')}
        </main>
    `;
    return html;
}

export function HomeEvent() {

}

function hasCharacter (props) {
    console.log(props.me)
    return props.me.accountHero != null;


}
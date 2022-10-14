import CharacterInfoBar, {setHealthBar} from "./UiComponents/CharacterInfoBar.js";
import battleInit from "../battleLogic.js";

let currentHp = '';
let maxHp = '';
let hero = '';
let username = '';

export default function Home(props) {
    username = props.me.username;
    currentHp = props.me.accountHero.currentHp;
    maxHp = props.me.accountHero.maxHp
    hero = props.me.accountHero;
    console.log(props);
    //language=html

    let html = `
        <main class="m-2" id="main-container">
            ${(hasCharacter(props) ? charInfo(props.me.accountHero, props.me.username) : 'doesnt have char')}
            <div>
                <button class="btn btn-danger" id="battle-start">Fight!</button>
            </div>
        </main>
    `;
    return html;
}

export function HomeEvent() {
    setHealthBar(currentHp, maxHp, username);
    battleStartEventListener();
}

function charInfo(hero, username) {
    return CharacterInfoBar(hero.currentHp, hero.maxHp, username);
}

function equipmentFormatter(item) {
    if (item == null) {
        return "None"
    }

    return item.name
}

function hasCharacter (props) {
    console.log(props.me)
    return props.me.accountHero != null;
}

function battleStartEventListener() {
    let battleStart = document.querySelector("#battle-start")

    battleStart.addEventListener("click", function () {
        console.log('clicked fight')
        battleInit(hero, 1)
    })
}
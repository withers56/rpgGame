import CharacterInfoBar, {setHealthBar} from "./UiComponents/CharacterInfoBar.js";

let currentHp = '';
let maxHp = '';

export default function Home(props) {
    currentHp = props.me.accountHero.currentHp;
    maxHp = props.me.accountHero.maxHp
    console.log(props);
    //language=html

    let html = `
        <main class="m-2">
            ${(hasCharacter(props) ? charInfo(props.me.accountHero, props.me.username) : 'doesnt have char')}
        </main>
    `;
    return html;
}

export function HomeEvent() {
    setHealthBar(currentHp, maxHp);
}

function charInfo(hero, username) {
    //language=html
    // return `
    // <ul>
    //     <li>Level: ${hero.level}</li>
    //     <li>Xp: ${hero.xp}</li>
    //     <li>Health: ${hero.currentHp}/${hero.maxHp}</li>
    //     <li>Armor: ${equipmentFormatter(hero.equippedArmor)}</li>
    //     <li>Weapon: ${equipmentFormatter(hero.equippedWeapon)}</li>
    // </ul>
    //
    // `

    return CharacterInfoBar(hero, username);
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
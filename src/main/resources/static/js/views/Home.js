export default function Home(props) {
    console.log(props);
    //language=html

    let html = `
        <main class="m-2">
            <h3>${props.me.username}</h3>
            ${(hasCharacter(props) ? charInfo(props.me.accountHero) : 'doesnt have char')}
        </main>
    `;
    return html;
}

export function HomeEvent() {

}

function charInfo(hero) {
    //language=html
    return `
    <ul>
        <li>Level: ${hero.level}</li>
        <li>Xp: ${hero.xp}</li>
        <li>Health: ${hero.currentHp}/${hero.maxHp}</li>
        <li>Armor: ${equipmentFormatter(hero.equippedArmor)}</li>
        <li>Weapon: ${equipmentFormatter(hero.equippedWeapon)}</li>
    </ul>
    
    `
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
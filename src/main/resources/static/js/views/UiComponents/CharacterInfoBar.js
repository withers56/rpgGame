
export default function CharacterInfoBar(hero, username) {
    //language=html
    let html = `
        <div class="charInfoBar">
            <div class="charImage black-border">
                <i class="bi bi-person-fill "></i>
            </div>
            <div class="stats">
                <div class="name text-center black-border">${username}</div>
                <div class="healthProgress black-border text-center">
                    <div class="healthBar">${hero.currentHp}/${hero.maxHp}</div>
                </div>
            </div>
        </div>
    `
    return html
}

export function setHealthBar(current, max) {
    console.log("function to calc healthbar")

    let bar = document.querySelector(".healthBar");

    console.log(bar)

    bar.style.width = calcHealthbarPercentage(current, max) + "%";

}

function calcHealthbarPercentage(current, max) {
    return ((current / max) * 100)
}


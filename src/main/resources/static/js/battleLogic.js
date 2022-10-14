import CharacterInfoBar, {setHealthBar} from "./views/UiComponents/CharacterInfoBar.js";

export default function battleInit(hero, enemyId) {

    console.log(hero)

    fetch("http://localhost:8080/rpg/enemies/enemyById/1").then(r => r.json()).then(enemy => {
        console.log(enemy)
        battleLoop(hero, enemy)
    })

}

function battleLoop(hero, enemy) {
    console.log("in fight loop")
    console.log(enemy)

    let mainContainer = document.querySelector("#main-container");
    //language=html
    mainContainer.innerHTML = `
    <div>
        <div id="enemy-section" class="d-flex jusitfy-content-between align-items-start my-4">
            ${CharacterInfoBar(enemy.currentHp, enemy.maxHp, enemy.name)}
            <img class="battle-image" src="https://previews.123rf.com/images/imazydreams/imazydreams1409/imazydreams140900199/31952459-goblin.jpg" alt="enemy">
        </div>
        <div id="hero-section" class="row my-4">
            <img class="battle-image col-6" src="https://www.vhv.rs/dpng/d/527-5273513_warrior-character-image-black-desert-character-png-transparent.png" alt="hero">
            <div class="col-6 d-flex flex-column align-items-end">
                ${CharacterInfoBar(hero.currentHp, hero.maxHp, "withers56")}
                <div class="mx-5">
                    <button class="btn btn-primary me-3">attack</button>
                    <button class="btn btn-primary ms-3">attack</button>
                </div>
            </div>
        </div>
        <div id="action-section">
            
        </div>
    </div>
    `

    //sets hero and enemies healthbars to current helath values
    setHealthBar(enemy.currentHp, enemy.maxHp, enemy.name)
    setHealthBar(hero.currentHp, hero.maxHp, "withers56")
}
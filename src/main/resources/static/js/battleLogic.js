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
        <div id="hero-section" class="d-flex jusitfy-content-between align-items-start my-4">
            <img class="battle-image" src="https://www.vhv.rs/dpng/d/527-5273513_warrior-character-image-black-desert-character-png-transparent.png" alt="hero">
            ${CharacterInfoBar(hero.currentHp, hero.maxHp, "withers56")}
        </div>
        <div id="action-section" class="d-flex align-items-center">
            <div class="game-chat p-2">text</div>
            <div class="actions p-2">
                <div class="top-actions d-flex justify-content-around my-2">
                    <button class="btn btn-primary" id="attack">Attack</button>
                    <button class="btn btn-primary" id="bag">Bag</button>
                </div>
                <div class="bottom-actions d-flex justify-content-around my-2">
                    <button class="btn btn-primary" id="spacer">Spacer</button>
                    <button class="btn btn-primary" id="flea">Flea!</button>
                </div>
            </div>
        </div>
    </div>
    `

    //sets hero and enemies healthbars to current helath values
    setHealthBar(enemy.currentHp, enemy.maxHp, enemy.name)
    setHealthBar(hero.currentHp, hero.maxHp, "withers56")
    //add actionjs listeners
    addActionBtnListeners();

}

function addActionBtnListeners() {
    attackBtnListener()
    bagBtnListener()
    spacerBtnListener()
    fleaBtnListener()
}

function attackBtnListener() {
    document.querySelector("#attack").addEventListener("click", function (){
        console.log('clicked attack!')
    })
}
function bagBtnListener() {
    document.querySelector("#bag").addEventListener("click", function (){
        console.log('clicked bag!')
    })
}
function spacerBtnListener() {
    document.querySelector("#spacer").addEventListener("click", function (){
        console.log('clicked spacer!')
    })
}
function fleaBtnListener() {
    document.querySelector("#flea").addEventListener("click", function (){
        console.log('clicked flea!')
    })
}

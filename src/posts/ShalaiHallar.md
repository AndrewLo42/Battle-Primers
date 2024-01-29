---
title: Shalai and Hallar
slug: shalai-and-hallar
description: A creature stax combo deck.
category: cedh
summary: Slow down the game and assemble an A+B combo
---

<h1 class="text-2xl text-teal-400"> GAMEPLAN </h1>

This deck intends to play early stax to slow the game down while assembling the combo.

<br/>

Can opt for a beat down plan. Since our interaction isn't the best at stopping other combos, we might have a bad time against some turbo decks or blue/black decks in general.

<br/>
<a class="text-sky-300" target="_blank" href="https://www.moxfield.com/decks/-BsbhGCB7kmDRKhUlQ7S_w"> Deck List </a>
<br/>

<div class="tab overflow-hidden my-2">
  <button class="tablinks border border-black p-1" onclick="openTab(event, 'Terror')">Red Terror</button>
  <button class="tablinks border border-black p-1" onclick="openTab(event, 'Heliod')">Heliod</button>
  <button class="tablinks border border-black p-1" onclick="openTab(event, 'Emiel')">Emiel</button>
</div>

<div id="Terror" class="tabcontent border border-solid border-stone-600 p-4">
    <h1 class="text-xl text-purple-400"> The Red Terror </h1>
    <div>
        Infinite +1/+1 counters onto The Red Terror and infinite damage dealt to target opponents after damage is dealth by a red source you control.
    </div>
    <div>
        War Elemental also does a similar effect.
    </div>
</div>

<div id="Heliod" class="tabcontent hidden border border-solid border-stone-600 p-4">
    <h1 class="text-xl text-purple-400"> Heliod, Sun-Crowned </h1>
    <div>
        Infinite +1/+1 counters onto Shalai and Hallar and infinite damage dealt to target opponents after you gain life. Heliod, Sun-Crowned can give lifelink. 
    </div>
    <div>
        Heliod also A+B combos with Walking Ballista
    </div>
</div>

<div id="Emiel" class="tabcontent hidden border border-solid border-stone-600 p-4">
    <h1 class="text-2xl text-purple-400"> Emiel the Blessed + Dockside Extortionist </h1>
    <div>
        Infinite mana (assuming Dockside makes at least 4 treasures) and technically a Shallar finisher if the treasures can be used.
    </div>
</div>

<script type="text/javascript">     
    function openTab(evt, tabName) {

    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    }
</script>


---
title: Malcolm Tymna
slug: pirate-farm
description: A control/midrange deck.
category: cedh
summary: Grind out the game and win.
---

<h1 class="text-2xl text-violet-400"> GAMEPLAN </h1>

Get Malcolm out early to accrue treasures. Bury your opponents with value. 
Ad Naus at a good time.

A small intro to Blue Farm.
<h2 class="mt-2 text-xl text-purple-400"> General Notes </h2>
<p>
    Value as in get treasures and draw cards. Every turn if possible. Playing out commanders ASAP to do this is generally a solid gameplan. Putting cards such as Rhystic Study or Esper Sentinel to potentially draw more cards is also good.
</p>
<p class="mt-1">
    Pirates are important, but NOT the theme of the deck. This is a good stuff deck at the end of the day.
</p>
<p class="mt-1">
    Tutor for combo pieces. Otherwise tutor for counterspells (Force of Will, Flusterstorm, Fierce Guardianship, etc) or interaction.
</p>

<div class="tab overflow-hidden my-2">
  <button class="tablinks border border-black p-1" onclick="openTab(event, 'Combo')">Win Combo</button>
  <button class="tablinks border border-black p-1" onclick="openTab(event, 'Control')">Control Combo</button>
  <button class="tablinks border border-black p-1" onclick="openTab(event, 'Other')">Other</button>
</div>

<div id="Combo" class="tabcontent border border-solid border-stone-600 p-4">
    <h1 class="text-xl text-purple-400 mb-2"> Thassa's Oracle + Demonic Consultation / Tainted Pact </h1>
    <div>
        Thoracle ETB on the stack, play the other piece, win.
        <br/>
        DC or TP will exile your whole deck while Thoracle ETB is on the stack, and if your deck is empty when Thorcale resolves, you will win the game (since it wants to see if you have small amount of cards in your deck)
    </div>
</div>

<div id="Control" class="tabcontent hidden border border-solid border-stone-600 p-4">
    <h1 class="text-2xl text-purple-400 mb-2"> Counter Top </h1>
    <div>
        Counter Balance + Sensei's Divining Top allows you to try to counter many things from resolving for free.
    </div>
</div>

<div id="Other" class="tabcontent hidden border border-solid border-stone-600 p-4">
  <h1 class="text-2xl text-purple-400 mb-2"> Backups </h1>
  <p>
    Touch the Spirit Realm to reset Thoracle!
  </p>
  <p>
    Kill your Thoracle and Reanimate it.
  </p>
  <p>
    Old fashioned beat down.
  </p>
</div>

<p class="mt-2">
    <h1 class=" text-purple-400"> Opposition Agent </h1>
    <span>
     Flash in response to someone searching their deck as a "gotcha," or just play it out as a deterrent for searching. (Searching such as tutors, fetch lands, abilities, etc).
    </span>
</p>

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
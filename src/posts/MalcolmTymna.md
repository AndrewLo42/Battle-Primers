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

<div class="tab overflow-hidden my-2">
  <button class="tablinks border p-1" onclick="openTab(event, 'Combo')">Win Combo</button>
  <button class="tablinks border p-1" onclick="openTab(event, 'Control')">Control Combo</button>
  <button class="tablinks border p-1" onclick="openTab(event, 'Other')">Other</button>
</div>

<div id="Combo" class="tabcontent border border-solid border-stone-600 p-4">
    <h1 class="text-xl text-purple-400 mb-2"> Thassa's Oracle + Demonic Consultation / Tainted Pact </h1>
    <div>
        Thoracle ETB on the stack, play the other piece, name a funny card, win.
    </div>
</div>

<div id="Control" class="tabcontent hidden border border-solid border-stone-600 p-4">
    <h1 class="text-2xl text-purple-400 mb-2"> Counter Top </h1>
    <div>
        Counter Balance + Sensei's Divining Top allows you to try to counter many things from resolving for free.
    </div>
</div>

<div id="Other" class="tabcontent hidden border border-solid border-stone-600 p-4">
  <h1 class="text-2xl text-purple-400mb-2"> WIP</h1>
  <p>...</p>
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
---
title: Najeela, the Blade Blossom
slug: najeela
description: A tempo/midrange combo deck.
category: cedh
summary: Protect the queen, attack with your squad to kill your opponents.
---


<h1 class="text-2xl text-violet-400"> GAMEPLAN </h1>

Slam down Najeela, slam your opponents.
<br/>
Exponentially grow the board with attacks and control your opponents.

<h2 class="text-lg">
    Combos:
</h2>
<div class="tab overflow-hidden my-2">
  <button class="tablinks border border-black p-1" onclick="openTab(event, 'Derevi')">Derevi</button>
  <button class="tablinks border border-black p-1" onclick="openTab(event, 'Hireling')">Grim Hireling</button>
  <button class="tablinks border border-black p-1" onclick="openTab(event, 'Thoracle')">Thassa's Oracle</button>
</div>

<div id="Derevi" class="tabcontent border border-solid border-stone-600 p-4">
    <h1 class="text-xl text-purple-400"> Derevi, Empyrial Tactician </h1>
    <div>
        5 attackers able to deal combat damage to any player(s).
    </div>
    <div>
        Untap lands to make WUBRG and take infinite combats.
    </div>
</div>

<div id="Hireling" class="tabcontent hidden border border-solid border-stone-600 p-4">
    <h1 class="text-xl text-purple-400"> Grim Hireling </h1>
    <div>
        3 attackers able to repeatedly deal combat damage to 3 different opponents, generating 6 treasures each time.
    </div>
</div>

<div id="Thoracle" class="tabcontent hidden border border-solid border-stone-600 p-4">
    <h1 class="text-xl text-purple-400"> Thassa's Oracle + Demonic Consultation / Tainted Pact </h1>
    <div>
        Thoracle ETB on the stack, play the other piece, name a funny card, win.
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
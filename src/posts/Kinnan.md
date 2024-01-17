---
title: Kinnan, Bonder Prodigy
slug: kinnan
description: A big mana, big creature midrange deck.
category: cedh
summary: Spin to win with your commander.
---

<h1 class="text-2xl text-violet-400"> GAMEPLAN </h1>

Get lots of mana, play Kinnan, activate to flip something big and dumb.

<br/>
<a target="_blank" href="https://www.moxfield.com/decks/2mKiO3kqFk-TGVoN0HtU0w"> Deck List </a>
<br/>

<div class="tab overflow-hidden my-2">
  <button class="tablinks border border-black p-1" onclick="openTab(event, 'Basalt')">Basalt Monolith</button>
  <button class="tablinks border border-black p-1" onclick="openTab(event, 'Hullbreaker')">Hullbreaker Horror</button>
  <button class="tablinks border border-black p-1" onclick="openTab(event, 'Mechanics')">Mechanics</button>
</div>

<div id="Basalt" class="tabcontent border border-solid border-stone-600 p-4">
    <h1 class="text-2xl text-purple-400"> Basalt Monolith </h1>
    <div>
        Make infinite colorless mana with Kinnan.
    </div>
    <h1 class="text-xl text-purple-400"> Mana Outlets </h1>
    <ul class="px-4 list-disc">
        <li>Thrasios, Triton Hero </li>
        <li> Walking Ballista </li>
        <li> Finale of Devastation</li>
    </ul>
</div>

<div id="Hullbreaker" class="tabcontent hidden border border-solid border-stone-600 p-4">
    <h1 class="text-2xl text-purple-400"> Hullbreaker Horror </h1>
    <div>
        With 2 mana positive rocks (artifacts that generate mana), one can obtain ininite mana by playing one rock and then returning to hand the other rock repeatedly, tapping for mana each time in between.
    </div>
</div>

<div id="Mechanics" class="tabcontent hidden border border-solid border-stone-600 p-4">
    <h1 class="text-2xl text-purple-400"> Mechanics </h1>
    <div>
        <span class="mb-1">
            More rocks and creatures that can tap for mana, the better!
        </span>
        <br/>
        <span class="mb-1">
            Can instant speed Kinnan's ability for some spooky tricks or keep options open.
        </span>
        <br/>
        <span class="mb-1">
            No need to rush Kinnan out since he isn't super useful without proper setup.
        </span>
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
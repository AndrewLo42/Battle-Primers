---
title: Yuriko
slug: yuiko
description: A aggresive combo deck.
category: cedh
summary: Damage the table, find a combo
---

<h1 class="text-2xl text-violet-400"> GAMEPLAN </h1>

Get Yuriko out early with an unblocked creature on turn 1 or 2. Bury your opponents with card advantage from Yuriko and burn them out with her ability. 

Can also combo kill or continue with a beat down and control plan.

<h2 class="mt-2 text-xl text-purple-400"> General Notes </h2>
<p>
    Yuriko is an interactive commander whose ability allows us to circumvent the commander tax, making her hard to disrupt for too long. She also functions as a card advantage engine and even a win condition
</p>
<p class="mt-1">
    Tutor for combo pieces. Otherwise tutor for cinteraction (Force of Will, Flusterstorm, Fierce Guardianship, Snuff Out, etc). Be responsible for stopping other turbo decks.
</p>

<div class="tab overflow-hidden my-2">
  <button class="tablinks border border-black p-1" onclick="openTab(event, 'Combo')">Win Combo</button>
  <button class="tablinks border border-black p-1" onclick="openTab(event, 'Control')">Doomsday</button>
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

<div id="Doomsday" class="tabcontent hidden border border-solid border-stone-600 p-4">
    <h1 class="text-2xl text-purple-400 mb-2"> Counter Top </h1>
    <div>
        Doomsday Basics: Single trigger gush pile, requires BBBU: Gush, Gitaxian Probe, Lotus Petal, Thassa's Oracle, Agadeem's Awakening
    </div>
    <div>
        Single trigger gushless pile, requires BBBU: Gitaxian Probe, Brainstorm, Thassa's Oracle, Mox Amber, Lotus Petal
    </div>
</div>

<div id="Other" class="tabcontent hidden border border-solid border-stone-600 p-4">
  <h1 class="text-2xl text-purple-400 mb-2"> Tips </h1>
  <p>
    Tutor cards to the top of your deck for big Yuriko damage. 
    <span>For example, use Vampiric Tutor to put Temporal Trespass to the top of the deck.</span>
  </p>
  <p>
    Sakashima's Student is a build your own dockside combo enabler. On top of sometimes being a Kraum, Tymna, or Dark Confidant, it sometimes win the game with a dockside extortionist and an outlet like Thrasios.
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
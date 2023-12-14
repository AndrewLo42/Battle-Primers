---
title: Slimefoot and Squee
slug: slimefoot-and-squee
description: A reanimator combo deck.
category: cedh
summary: Get value pieces and the commander into the graveyard
---

<h1 class="text-2xl text-teal-400"> GAMEPLAN </h1>

Our main goal is to have creatures in the graveyard to reanimate them with Slimefoot and Squee.

The wincondition is sacrifice Slimefoot and Squee more Dockside Extortionist with Skirk Prospector, Viscera Seer or Goblin Bombardment then from our graveyard activate Slimefoot and Squee sacrificing a saproling token and return to Slimefoot and Squee from our graveyard targeting to Dockside Extortionist. 

<br/>

<div class="tab overflow-hidden my-2">
  <button class="tablinks border border-black p-1" onclick="openTab(event, 'Derevi')">Derevi</button>
  <button class="tablinks border border-black p-1" onclick="openTab(event, 'Technomancer')">Technomancer</button>
  <button class="tablinks border border-black p-1" onclick="openTab(event, 'Caster')">Dual Caster</button>
</div>

<div id="Derevi" class="tabcontent border border-solid border-stone-600 p-4">
    <h1 class="text-2xl text-purple-400"> Dockside Extortionist + Skirk Prospector </h1>
    <div>
        Sacrificing Slimeefoot & Squee and Dockside Extortionist with Skirk Prospector, two red mana will be generated.
    </div>
    <div>
        Need at least three artifacts and/or enchantments for infinite mana with treasures or at least two treasures and/or enchantments for infinite ETB, IST.
    </div>
    <br/>
    <h1 class="text-xl text-purple-400"> Finishers </h1>
    With infinite Mana from above and a payoff, we can kill.
    <ul class="px-4 list-disc">
        <li> Mogg Fanatic </li>
        <li> Mayhem Devil </li>
        <li> Orcish Bowmasters </li>
    </ul>
</div>

<div id="Technomancer" class="tabcontent hidden border border-solid border-stone-600 p-4">
    <h1 class="text-xl text-purple-400"> Ruthless Technomancer + Dockside Extortionist + Viscera Seer </h1>
    <div>
        Result: Infinite Treasure tokens. Infinite colored mana. Infinite ETB. Infinite LTB. Infinite death triggers. Infinite sacrifice triggers. Infinite scry 1.
    </div>
    <div>
        Requires: Dockside Extortionist in hand. All other permanents on the battlefield. Opponents control at least six artifacts and/or enchantments.
    </div>
    <h2> Steps </h2>
    <ul class="px-4 list-disc">
        <li> Cast Dockside Extortionist by paying 1R Dockside Extortionist enters the battlefield, creating at least six Treasure tokens. </li>
        <li> Activate three Treasure tokens by tapping and sacrificing them, adding 2B </li>
        <li> Activate Viscera Seer by sacrificing Dockside Extortionist, causing you to scry</li>
        <li>Activate Ruthless Technomancer by paying , and sacrificing one Treasure tokens, returning Dockside Extortionist from your graveyard to the battlefield</li>
        <li>Repeat from step 2</li>
    </ul>
</div>

<div id="Caster" class="tabcontent hidden border border-solid border-stone-600 p-4">
    <h1 class="text-xl text-purple-400"> Dualcaster Mage + Saw in Half / Twinflame </h1>
    <div>
        SiH or Twinflame, copy with Dualcaster, go infinite.
    </div>
    <div>
        Bonus with Lightning bolt. 
    </div>
    <ul class="px-4 list-disc">
        <li>Cast Saw in Half destroying a creature you control. </li>
        <li> HOLD PRIORITY and cast Dualcaster Mage targeting SiH. </li>
        <li> Before the last DCM ability triggers, cast Lightning Bolt</li>
        <li> Now since you will have 2 DCM triggers due to SiH, use one to target SiH, and the other to target Lightning Bolt.</li>
        <li> Nuke your opponents for the win!</li>
    </ul>
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


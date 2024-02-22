---
title: Slimefoot and Squee
slug: slimefoot-and-squee
description: A reanimator combo deck.
category: cedh
summary: Get value pieces and the commander into the graveyard
---

<h1 class="text-2xl text-teal-400"> GAMEPLAN </h1>

Our main goal is to have creatures in the graveyard to reanimate them with Slimefoot and Squee. A bit of a glass cannon, we seek to combo quickly and efficiently. Try to find good windows or have the ability to present multiple wins or scary cards in quick succession.

The main wins rely on Dockside generating 2+ treasures with a sacrifice outlet.

The win condition is sacrifice Slimefoot and Squee more Dockside Extortionist with Skirk Prospector, Viscera Seer or Goblin Bombardment then from our graveyard activate Slimefoot and Squee sacrificing a saproling token and return to Slimefoot and Squee from our graveyard targeting to Dockside Extortionist. 

<br/>
<a class="text-sky-300" target="_blank" href="https://www.moxfield.com/decks/b3V2L82aWkCks7E5X9GQHw"> Deck List </a>
<br/>

<div class="tab overflow-hidden my-2">
  <button class="tablinks border border-black p-1" onclick="openTab(event, 'Prospector')">Prospector</button>
  <button class="tablinks border border-black p-1" onclick="openTab(event, 'Technomancer')">Technomancer</button>
  <button class="tablinks border border-black p-1" onclick="openTab(event, 'Kiki')">Kiki</button>
</div>

<div id="Prospector" class="tabcontent border border-solid border-stone-600 p-4">
    <h1 class="text-2xl text-purple-400"> Dockside Extortionist + Skirk Prospector </h1>
    <div>
        Sacrificing Slimeefoot & Squee and Dockside Extortionist with Skirk Prospector, two red mana will be generated.
    </div>
    <div>
        Need opponents to have at least three artifacts and/or enchantments for infinite mana with treasures or at least two treasures and/or enchantments for infinite ETB, IST.
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
        <li>Activate Ruthless Technomancer and sacrificing one Treasure token, returning Dockside Extortionist from your graveyard to the battlefield</li>
        <li>Repeat from step 2</li>
    </ul>
</div>

<div id="Kiki" class="tabcontent hidden border border-solid border-stone-600 p-4">
    <h1 class="text-xl text-purple-400"> Kiki + Hyrax Tower Scout </h1>
    <ul class="px-4 list-disc">
        <li>Activate Kiki-Jiki by tapping it, creating a token copy of Hyrax Tower Scout </li>
        <li> The Hyrax Tower Scout token enters the battlefield, untapping Kiki-Jiki </li>
        <li> Repeat for infinite HTS </li>
        <li> Swing in or sac them all </li>
    </ul>
    <div>
        Tutor or reanimate (with Entomb in mind) this combo for a quick win, mana permitting.
    </div>
    <div>Can do weird lines like copy bowmasters to ping the original bowmasters to allow bowmasters to become a reanimation target. Assumes the only sac outlet is Prospector and have access to ifnitite reanimation already.</div>
</div>

<p class="mt-2">
    <h1 class=" text-purple-400"> Other Tips </h1>
    <span>
        Birthing Pod is useful to step up to important creatures
    </span>
    <br/>
    <span>
        Broodlord will always get Saw In Half the first time, convoke the SiH to get two more searches. Mana permitting, these can easily be win cons.
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


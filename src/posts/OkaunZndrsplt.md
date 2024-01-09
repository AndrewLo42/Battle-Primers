---
title: Okaun // Zndrsplt
slug: coin-flip
description: A combo/midrange deck.
category: cedh
summary: Are you feeling lucky?
---

<h1 class="text-2xl text-violet-400"> GAMEPLAN </h1>

Use Zndrsplt to draw cards and generate powerful cross-synergies that can result in a critical mass of card advantage and board presence from an early point in the game. Slam down Okaun for some scary presence and occasional kill threat.

This is a midrange control deck that fluctuates between explosive board presence and reactive turn cycles. 
<h2 class="mt-2 text-xl text-purple-400"> General Notes </h2>
<p>
    Krark's Thumb is pretty close to a win if it sticks around a couple turns, Try to search for this card ASAP and protect it.
</p>
<p class="mt-1">
    Mana Crypt draws cards. Always get this with Urza's Saga if possible. Zndrsplt also triggers off our opponent's copies of mana crypts.
</p>
<p class="mt-1">
    Landing a commander early is very important, if the pod isn't too turbo heavy, mulliganing for strong fast mana is good. With some luck, Zndrsplt can refill the hand.
</p>

<div class="tab overflow-hidden my-2">
  <button class="tablinks border border-black p-1" onclick="openTab(event, 'Combo')">Main Combo</button>
  <button class="tablinks border border-black p-1" onclick="openTab(event, 'Dualcaster')">Dualcaster Combo</button>
  <button class="tablinks border border-black p-1" onclick="openTab(event, 'Breach')">Breach</button>
</div>

<div id="Combo" class="tabcontent border border-solid border-stone-600 p-4">
    <h1 class="text-xl text-purple-400 mb-2"> Frenetic Efreet + Zndrsplt / Okaun</h1>
    <div>
        This will allow you to draw your deck. Each activation goes on the stack one by one, so you can resolve the coin flips "individually."
        <br/>
        Activate the Efreet and hold priority to put a bunch of these on the stack (can even do this in response to something as well), and for each one won, Zndrsplt will trigger for a card draw.
        <br/>
        Now you will need to remove Zndrsplt at instant speed before resolving the Efreet activations on the stack to avoid decking yourself (return to hand, kill it, etc).
        <br/>
        Thassa's Oracle to win.
        <br/>
        <br/>
        Have Okaun? After winning infinite flips, Okaun will be buff. Use Chandra's Ignition to finish the table.
    </div>
</div>

<div id="Dualcaster" class="tabcontent hidden border border-solid border-stone-600 p-4">
    <h1 class="text-xl text-purple-400"> Dualcaster Mage + Saw in Half / Twinflame </h1>
    <div>
        Drew your whole deck? Realized your deckbuilder forgot the Thoracle? Try this one as your finisher.
    </div>
    <div>
        Twinflame, copy with Dualcaster, go infinite.
    </div>
</div>

<div id="Breach" class="tabcontent hidden border border-solid border-stone-600 p-4">
  <h1 class="text-2xl text-purple-400 mb-2"> Underworld Breach + Lion's Eye Diamond </h1>
  <p>
    Underworld Breach + Lion's Eye Diamond + Brainfreeze: you can ether mill your opponents out OR lightning bolt/gut shot them to death with the following
  </p>
  <p>
    Krark, the Thumbless + Sakashima of a Thousand Faces + Tavern Scoundrel + Twinflame/Heat Shimmer: make an arbitrary number of Krarks and then cast lightning bolt or gut shot. This is usually the safest way to attempt a win.
  </p>
  <p>
    Krark, the Thumbless + Tavern Scoundrel + Zndrsplt, Eye of Wisdom: will almost always result in a win, just start casting spells and go for as long as you can.
  </p>
</div>

<p class="mt-2">
    <h1 class=" text-purple-400"> Other Tips </h1>
    <span>
     Unfortunately, you are responsible for helping to stop early wins. A turbo win is rare, but can happen. 
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
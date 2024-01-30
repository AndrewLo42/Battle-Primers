---
title: Zirda, the Dawnwaker
slug: zirda
description: A combo/stax deck.
category: cedh
summary: Create infinite mana to blow up the table.
---

<h1 class="text-2xl text-violet-400"> GAMEPLAN </h1>

Use one of two cards to create infinite mana with: <b>Basalt Monolith</b> or <b>Grim Monolith.</b>

<br/>
<div>
    Basalt Monolith/Grim Monolith + Zirda, the Dawnwaker – This is the goal we usually want to reach. Tap either Monolith then untap it for less because of Zirda's second ability. Repeat for infinite colorless.
    <br/>
    Lion's Eye Diamond + Auriok Salvagers – This will empty our hand, but we are netting colored mana from this with every iteration, so we can assemble infinite colored mana to use for cards already on the battlefield, or in the graveyard, thanks to Auriok Salvagers.
    <br/>
    With infinite mana we normally have some cards to win the game: Goblin Cannon, Cogwork Assembler, or Walking Ballista. 
</div>
<br/>

<h2 class="mt-2 text-xl text-purple-400"> General Notes </h2>
<p>
    The main goal of this deck is to win through one of various combos early in the game. If that fails, it runs a good amount of Stax pieces to slow our opponents down, so we can try again. This makes the deck adaptive in nature and if we are lucky, our opponents underestimate Boros enough so we can sneak in a win from out of nowhere.
</p>

<p class="mt-1">
    Optimally our starting hand should consist of 1-3 lands, 1-2 other mana sources, 1-2 pieces of Stax or disruption in general and/or 1-2 tutors. A combo piece here or there is great, too!
</p>

<p class="mt-1">
    This deck is very simplistic in gameplan, opting for a focused combo path with a few stax options to prevent your opponents from going off too quickly. It can potentially fold if stopped.
</p>

<br/>
<a class="text-sky-300" target="_blank" href="https://www.moxfield.com/decks/U9tBYMwev0iEWqKzyPilkQ"> Deck List </a>
<br/>

<div class="tab overflow-hidden my-2">
  <button class="tablinks border border-black p-1" onclick="openTab(event, 'Bomb')">Bomberman</button>
  <button class="tablinks border border-black p-1" onclick="openTab(event, 'Wheel')">Wheel Them</button>
  <button class="tablinks border border-black p-1" onclick="openTab(event, 'Cauldron')">Soul Cauldron</button>
</div>

<div id="Bomb" class="tabcontent border border-solid border-stone-600 p-4">
    <h1 class="text-xl text-purple-400 mb-2"> Bomberman </h1>
    <div>
        Blow up your opponents
        <br/>
        <span class="text-red-500">The Original: </span>With Auriok Salvagers and Lion's Eye Diamond, we have the option to use Pyrite Spellbomb over and over again from our graveyard to shock all opponents to death.
        <br/>
        if we don't have a Pyrite Spellbomb at our disposal, but a Blind Obedience in play, we can use the infinite mana to extort Lion's Eye Diamond with every cast to drain our opponents to death.
    </div>
</div>

<div id="Wheel" class="tabcontent hidden border border-solid border-stone-600 p-4">
    <h1 class="text-2xl text-purple-400 mb-2"> Wheel of Fun </h1>
    <div>
        Cast Underworld Breach, Lion's Eye Diamond and Wheel of Fortune to cycle through our deck, but we have to make sure that we have at least 6 other cards in our graveyard that we can exile for the Escape cost, the first time we cast Lion's Eye Diamond and Wheel of Fortune from our graveyard. After that, we can go on with wheeling and if our opponents have fewer cards in their library than we do, we can mill them out with that. If not, we can at least assemble our wincon from our graveyard.
    </div>
    <br/>
    <div>
        If Smothering Tithe is in play, we can get loads of Treasures.
    </div>
</div>

<div id="Cauldron" class="tabcontent hidden border border-solid border-stone-600 p-4">
    <h1 class="text-2xl text-purple-400 mb-2"> Get in the Cauldron </h1>
    <h2>Other creature synergies in general...</h2>
    <br/>
    Soul Cauldron to exile useful creatures. Myr Welder works here, too!
    <h2>The Creatures </h2>
    <ul class="px-4 list-disc">
        <li> Walking Ballista! Turns any creature into a machine gun with infinite mana available.</li>
        <li> Oswald Fiddlebender: pod artifacts </li>
        <li> Goblin Engineer: get some things back from the grave</li>
    </ul>
  <p>
  </p>
</div>

<p class="mt-2">
    <h1 class=" text-purple-400"> Other Tips </h1>
    <span>
        Biggest weakness is Null Rod!
    <br/>
        This card shuts down every single combo in our deck, so when you see this card, it has to go immediately. Same goes for Karn, the Great Creator, Collector Ouphe and every other effect that shuts down artifacts.
    </span>
    <span>
        Even though we are able to win as early as Turn 1 this is not the norm and so we should be able to establish a good board position early on, which means some mana rocks and the possibility to hinder our opponents.
    </span>
    <span>
        By the time we enter mid-game we either probably already have a failed attempt to combo off or we didn't find our combo yet.
    <br/>
        We have many ways to start a combo, so we take a defensive position and try to recover while keeping our opponents at bay.
    </span>
        Can exile artifacts with Cauldron or Breach to get them back with Karn minus ability. Very niche, but can happen if removal happens on key pieces or to extend combos.
    </span>
    <span>
        Goblin Engineer can turn off your own stax pieces if needed once there's a layer of protection up.
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
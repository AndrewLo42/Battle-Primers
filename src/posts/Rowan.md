---
title: Rowan, Scion of War
slug: rowan
description: A turbo combo deck.
category: cedh
summary: Hurt yourself to make cards with x cost cheaper
---

<h1 class="text-2xl text-teal-400"> GAMEPLAN </h1>

Deal damage to yourself with lands, Ad Nauseum, Plunge Into Darkness, etc and activate your commander to cheat out big spells. 

A magic number is generally 4.

<br/>
<h2 class="text-lg">
    Combos:
</h2>
<div class="tab overflow-hidden my-2">
  <button class="tablinks border border-black p-1" onclick="openTab(event, 'Sear')">Searing Touch</button>
  <button class="tablinks border border-black p-1" onclick="openTab(event, 'Hireling')">Dualcaster</button>
  <button class="tablinks border border-black p-1" onclick="openTab(event, 'Broodlord')">Hoarding Broodlord</button>
</div>

<div id="Sear" class="tabcontent border border-solid border-stone-600 p-4">
    <h1 class="text-xl text-purple-400"> Searing Touch + Birgi, God of Storytelling </h1>
    <div>
        Deal 4 damage to yourself, activate Rowan.
    </div>
    <div>
        Cast Searing Touch with Birgi on board, buyback cost is reduced by Rowan's ability, a red pip is made with Birgi, thus creating infite damage/storm.
    </div>
</div>

<div id="Hireling" class="tabcontent hidden border border-solid border-stone-600 p-4">
    <h1 class="text-2xl text-purple-400"> Dualcaster Mage + Saw in Half / Twinflame </h1>
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

<div id="Broodlord" class="tabcontent hidden border border-solid border-stone-600 p-4">
    <h1 class="text-xl text-purple-400"> Hoarding Broodlord</h1>
    <div>
        ETB get Saw in Half. SiH to create two more Broodlords.
    </div>
    <div>
        Get Burnt Offering and Plunge into Darkness.
        Offer Broodlord then cast Plunge, look for your card with lots of life sacrificed then resolve something like Torment of Hailfire or Exsanguinate.
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
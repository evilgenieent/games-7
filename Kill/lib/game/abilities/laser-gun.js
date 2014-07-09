ig.module( 'game.abilities.laser-gun' )
.requires(
    'game.entities.laser',
    'plusplus.abilities.ability-shoot'
)
.defines(function () {
	"use strict";

	var _c = ig.CONFIG;
    var _ut = ig.utils;
    ig.LaserGun = ig.AbilityShoot.extend({
    	initTypes: function () {
			this.parent();
			ig.utils.addType(ig.Ability, this, 'type', "SPAMMABLE");
        },
        /*activateComplete: function() {
        	console.log(arguments);
        	this.parent();
        },*/
        spawningEntity: ig.EntityLaser,
        spawnAtTarget: false,
        offsetVelX: 300,
        offsetVelY: 300,
    });
});
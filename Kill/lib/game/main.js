ig.module('game.main')
.requires(
    'plusplus.core.plusplus',
    'game.levels.level1',
    'game.entities.player'
)
.defines(function () {
    var myGameClass = ig.GameExtended.extend({
        player: null,
        init: function () {
            this.parent();
            this.loadLevel(ig.global.LevelLevel1);
            this.player = this.getPlayer();
            //ig.game.playerManager.manage(this.player);
        },
        inputStart: function () {
            this.parent();
            ig.input.bind(ig.KEY.MOUSE1, 'shoot');
        },
        inputEnd: function () {
            this.parent();
            ig.input.unbind(ig.KEY.MOUSE1, 'shoot');
        }/*,
        update: function() {
            //console.log(this.player.vel);
            //this.player.pos.y -= ig.system.tick * this.player.speed;
            //this.player.moveToUp();
            this.parent();
        }*/
    });
    ig.main( '#canvas', myGameClass, 60, 320, 240, 1, ig.LoaderExtended );
});
ig.module( 'game.levels.level1' )
.requires( 'impact.image','game.entities.player' )
.defines(function(){
LevelLevel1=/*JSON[*/{"entities":[{"type":"EntityPlayer","x":76,"y":364}],"layer":[{"name":"map","width":20,"height":60,"linkWithCollision":false,"visible":1,"tilesetName":"media/tiles.png","repeat":false,"preRender":false,"distance":"1","tilesize":8,"foreground":false,"data":[[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]},{"name":"collision","width":20,"height":60,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":"1","tilesize":8,"foreground":false,"data":[[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}]}/*]JSON*/;
LevelLevel1Resources=[new ig.Image('media/tiles.png')];
});
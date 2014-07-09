ig.module( 'game.entities.laser' )
.requires(
    'plusplus.abstractities.projectile'
)
.defines(function () {
    ig.EntityLaser = ig.global.EntityLaser = ig.Projectile.extend({
        collides: ig.EntityExtended.COLLIDES.LITE,
        size: {x: 4, y: 4},
        offset: {x: 2, y: 2},
        animSheet: new ig.AnimationSheet( "media/projectile.png", 8, 8),
        animInit: "idleX",
        animSettings: {
            moveX: {
                frameTime: 1,
                sequence: [0]
            },
            deathX: {
                frameTime: 0.05,
                sequence: [1, 2, 3, 4, 5]
            },
            moveY: {
                frameTime: 1,
                sequence: [6]
            },
            deathY: {
                frameTime: 0.05,
                sequence: [7, 8, 9, 10, 11]
            }
        },
        // max velocity of 
        maxVel: {
            x: 500,
            y: 500
        },
        canFlipX: true,
        canFlipY: true,
        damage: 2, // lasers hurt
        lifeDuration: 2, // lasers eventually fade (like a particle)
        gravityFactor: 0, // lasers ignore gravity
        friction: {x:0, y:0}, // lasers have no friction
        bounciness: 0, // lasers don't bounce
        collisionKills: true // lasers stop if they hit a wall
    });
});
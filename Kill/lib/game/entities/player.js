ig.module(
	'game.entities.player'
)
	.requires(
		'plusplus.abstractities.player',
		'game.abilities.laser-gun',
        'plusplus.helpers.utilsvector2'
	)
	.defines(function() {
		"use strict";
		var _c = ig.CONFIG;
        var _ut = ig.utils;
        var _utv2 = ig.utilsvector2;
		ig.EntityPlayer = ig.global.EntityPlayer = ig.Player.extend({
	        size: {
                x: 8,
                y: 8
            },
            offset: {
                x: 4,
                y: 4
            },
            maxVel: { y: 50 },
            friction: { x:0, y:0},
            speed: { x:0, y:30 },

            slope: 0,
	        animSheet: new ig.AnimationSheet( "media/player.png", 16, 16),
	        animInit: "idleY",
            //accel: _utv2.vector(0, -5),
	        animSettings: {
	        	moveX: {
                    frameTime: 0.07,
                    sequence: _c.TOP_DOWN ? [21, 22, 23, 22] : [0, 1, 2, 3, 4, 5]
                },
	            idleX: {
                    frameTime: 1,
                    sequence: _c.TOP_DOWN ? [21] : [0]
                },
                idleY: {
                    frameTime: 1,
                    sequence: [12]
                },
	            shootX: {
                    frameTime: 0.25,
                    sequence: _c.TOP_DOWN ? [26] : [2]
                },
                shootY: {
                    frameTime: 0.25,
                    sequence: [24]
                }
                
	        },
            canWanderY: true,
	        initProperties: function() {
			    this.parent();
			    this.shoot = new ig.LaserGun(this);
			    this.abilities.addDescendants([this.shoot]);
                this.vel = {x:0, y:20};
			    this.facing = { x: 0, y: -1 };
			},
	        handleInput: function() {
	        	/*if (ig.input.state('up')) {
	        		console.log('hola');
	        	}*/
	        	var shootX;
                var shootY;
	        	//console.log(this.pos.y + this.size.y * 0.5);
	        	if (ig.input.pressed('shoot')) {
                    var inputPoints = ig.input.getInputPoints([ 'tapped' ], [ true ]);
                    var inputPoint = inputPoints[0];
                    if(inputPoint) {
                        this.shoot.activate(inputPoint/*{
                            x: shootX,
                            y: shootY
                        }*/);
                    }
                    //this.accel.y = 5;
                    //this.moveToUp(10);
			        this.speed -= 1; 
			    }
	        	//this.parent();
	        },
            update: function() {
                //this.vel.y += ig.system.tick * (this.speed);
                //this.handleInput();
                //console.log(this.vel.y);
                //this.screen.y += ig.system.tick * this.speed;

                this.parent();
            }
	    });
	});


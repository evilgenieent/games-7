ig.module(
    'plusplus.config-user'
)
    .defines(function() {

        /**
         * User configuration of Impact++.
         * <span class="alert alert-info"><strong>Tip:</strong> it is recommended to modify this configuration file!</span>
         * @example
         * // in order to add your own custom configuration to Impact++
         * // edit the file defining ig.CONFIG_USER, 'plusplus/config-user.js'
         * // ig.CONFIG_USER is never modified by Impact++ (it is strictly for your use)
         * // ig.CONFIG_USER is automatically merged over Impact++'s config
         * @static
         * @readonly
         * @memberof ig
         * @namespace ig.CONFIG_USER
         * @author Collin Hover - collinhover.com
         **/
        ig.CONFIG_USER = {

            /**
             * Needs a top-down style game? Uncomment below!
             */
            
			TOP_DOWN: true,
			ENTITY: {
				CAN_FLIP_X: true,
				CAN_FLIP_Y: false,
                MAX_VEL_Y: 400,
                MAX_VEL_GROUNDED_Y: 400
			},
			CREATURE: {
				CAN_WANDER_X: true,
				CAN_WANDER_Y: true
			},
            PLAYER_MANAGER: {
                AUTO_MANAGE_PLAYER: false,
                AUTO_MOVE_X_Y: false
			},

            /**
             * Fullscreen!
             */
            GAME_WIDTH_PCT: 1,
            GAME_HEIGHT_PCT: 1,

            /**
             * Dynamic scaling based on dimensions in view.
             */
            GAME_WIDTH_VIEW: 300,
            GAME_HEIGHT_VIEW: 100,

            /**
             * Camera trap and smoothness. This helps with motion sickness.
             */
            
            CAMERA: {
                KEEP_CENTERED: false,
                BOUNDS_TRAP_AS_PCT: true,
                BOUNDS_TRAP_PCT_MINY: 0.7,
                BOUNDS_TRAP_PCT_MAXY: 0.705,
                LERP: 0.025
            },

            /**
             * Special fonts.
             */
            FONT: {
                MAIN_NAME: "font_04b03_white_16.png",
                ALT_NAME: "font_04b03_white_8.png",
                CHAT_NAME: "font_04b03_black_8.png"
            }

        };

    });

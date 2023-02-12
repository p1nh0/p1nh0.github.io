
    // Wrap everything in a function to keep your stuff private.
    (function () {

        // JavaScript strict mode is a good thing.
        "use strict";

        // Define a unique global namespace for your stuff.
        // You should change this to a namespace that is appropriate for your project.
        fluid.registerNamespace("sampleLoop");

        var enviro = flock.init();

        // Expose any public functions or constructors as properties on your namesapce.
        sampleLoop.play = function () {
        
        
        var synth = flock.synth({
        synthDef: {
            ugen: "flock.ugen.playBuffer",
            buffer: {
                id: "chord",
                url: "../media/Guitarra.wav"
            },
            loop: 1,
            mul: 0.4
        }
    });
            
    

        // If you're on iOS, you will need to call in a listener for
        // some kind of user input action, such a button click or touch handler.
        // This is because iOS will only play sound if the user initiated it.
        enviro.start();
    };

    }());
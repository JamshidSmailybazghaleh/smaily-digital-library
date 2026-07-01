/******************************************************************************
 *
 *  Smaily Knowledge Engine (SKE)
 *
 *  File:
 *      ske.js
 *
 *  Version:
 *      1.0.0
 *
 *  Status:
 *      Production
 *
 *  Purpose:
 *      Bootstrap Loader
 *
 ******************************************************************************/

"use strict";

/* ==========================================================================
   BOOTSTRAP
   ========================================================================== */

(async function () {

    console.group("Smaily Knowledge Engine");

    console.info(
        "Initializing..."
    );

    try {

        /* ==============================================================
           CHECK CORE
        ============================================================== */

        if (!window.SKE_CONFIG)
            throw new Error("config.js not loaded.");

        if (!window.SKE_REGISTRY)
            throw new Error("registry.js not loaded.");

        if (!window.SKE_VALIDATOR)
            throw new Error("validator.js not loaded.");

        if (!window.SKE_RENDERER)
            throw new Error("renderer.js not loaded.");

        if (!window.SKE_COMPONENTS)
            throw new Error("components.js not loaded.");

        if (!window.SKE_LIBRARY)
            throw new Error("library.js not loaded.");

        if (!window.SKE_STATISTICS)
            throw new Error("statistics.js not loaded.");

        if (!window.SKE_SEARCH)
            throw new Error("search.js not loaded.");

        if (!window.SKE_FILTERS)
            throw new Error("filters.js not loaded.");

        if (!window.SKE)
            throw new Error("api.js not loaded.");



        /* ==============================================================
           LOAD REGISTRY
        ============================================================== */

        await SKE.registry.initialize();



        /* ==============================================================
           VALIDATE
        ============================================================== */

        const report =

            SKE.validate();

        if (!report.valid) {

            console.error(

                "Validation Failed."

            );

        }



        /* ==============================================================
           RENDER
        ============================================================== */

        SKE.render();



        /* ==============================================================
           STATISTICS
        ============================================================== */

        console.table(

            SKE.statistics()

        );



        /* ==============================================================
           READY
        ============================================================== */

        console.info(

            "SKE Ready."

        );

        console.info(

            `Engine Version: ${SKE.version()}`

        );

        document.documentElement.setAttribute(

            "data-ske",

            "ready"

        );

    }

    catch (error) {

        console.error(

            "SKE Fatal Error"

        );

        console.error(error);

        document.documentElement.setAttribute(

            "data-ske",

            "error"

        );

    }

    console.groupEnd();

})();



/* ==========================================================================
   GLOBAL
   ========================================================================== */

window.SKE_BOOT = true;

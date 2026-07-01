/******************************************************************************
 *
 *  Smaily Knowledge Engine (SKE)
 *
 *  File:
 *      api.js
 *
 *  Version:
 *      1.0.0
 *
 *  Status:
 *      Production
 *
 *  Purpose:
 *      Public API Layer
 *
 ******************************************************************************/

"use strict";

/* ==========================================================================
   PUBLIC API
   ========================================================================== */

const SKE = {

    /* ----------------------------------------------------------------------
       Engine Information
    ---------------------------------------------------------------------- */

    version() {

        return SKE_CONFIG.engine.version;

    },

    info() {

        return {

            engine: SKE_CONFIG.engine,

            project: SKE_CONFIG.project

        };

    },



    /* ----------------------------------------------------------------------
       Registry
    ---------------------------------------------------------------------- */

    registry: {

        initialize() {

            return SKE_REGISTRY.initialize();

        }

    },



    /* ----------------------------------------------------------------------
       Books
    ---------------------------------------------------------------------- */

    books() {

        return SKE_LIBRARY.getPublishedBooks();

    },

    featured() {

        return SKE_LIBRARY.getFeaturedBooks();

    },

    foundational() {

        return SKE_LIBRARY.getFoundationalBooks();

    },

    latest(limit = 10) {

        return SKE_LIBRARY.getLatestBooks(limit);

    },

    book(id) {

        return SKE_LIBRARY.getBook(id);

    },



    /* ----------------------------------------------------------------------
       Search
    ---------------------------------------------------------------------- */

    search(keyword) {

        return SKE_SEARCH.search(keyword);

    },



    /* ----------------------------------------------------------------------
       Filters
    ---------------------------------------------------------------------- */

    filters: {

        category(name) {

            return SKE_FILTERS.category(name);

        },

        language(name) {

            return SKE_FILTERS.language(name);

        },

        author(name) {

            return SKE_FILTERS.author(name);

        },

        status(name) {

            return SKE_FILTERS.status(name);

        },

        type(name) {

            return SKE_FILTERS.type(name);

        }

    },



    /* ----------------------------------------------------------------------
       Statistics
    ---------------------------------------------------------------------- */

    statistics() {

        return SKE_STATISTICS.summary();

    },



    /* ----------------------------------------------------------------------
       Renderer
    ---------------------------------------------------------------------- */

    render() {

        SKE_LIBRARY.renderAll();

    },



    /* ----------------------------------------------------------------------
       Validate
    ---------------------------------------------------------------------- */

    validate() {

        return SKE_VALIDATOR.validateBooks(

            SKE_LIBRARY.getPublishedBooks()

        );

    },



    /* ----------------------------------------------------------------------
       Boot
    ---------------------------------------------------------------------- */

    async boot() {

        console.info("Starting SKE...");

        await this.registry.initialize();

        this.validate();

        this.render();

        console.info(

            "SKE Ready."

        );

    }

};

/* ==========================================================================
   GLOBAL EXPORT
   ========================================================================== */

window.SKE = SKE;

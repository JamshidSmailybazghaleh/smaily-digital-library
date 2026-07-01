/******************************************************************************
 *
 *  Smaily Knowledge Engine (SKE)
 *
 *  File:
 *      config.js
 *
 *  Version:
 *      1.0.0
 *
 *  Status:
 *      Production
 *
 *  Purpose:
 *      Global configuration for the entire
 *      Smaily Knowledge Ecosystem.
 *
 *  Copyright © 2026
 *
 ******************************************************************************/

"use strict";

/* ==========================================================================
   SKE CONFIGURATION
   ========================================================================== */

const SKE_CONFIG = Object.freeze({

    /* ----------------------------------------------------------------------
       ENGINE
       ---------------------------------------------------------------------- */

    engine: {

        name: "Smaily Knowledge Engine",

        shortName: "SKE",

        version: "1.0.0",

        release: "Production",

        environment: "production",

        debug: false

    },



    /* ----------------------------------------------------------------------
       PROJECT
       ---------------------------------------------------------------------- */

    project: {

        name: "Smaily Knowledge Ecosystem",

        author: "Jamshid Smaily",

        copyright: "© 2026",

        website: "https://jamshidsmaily.com"

    },



    /* ----------------------------------------------------------------------
       REGISTRY
       ---------------------------------------------------------------------- */

    registry: {

        base: "../registry/",

        books: "../registry/books.json",

        authors: "../registry/authors.json",

        projects: "../registry/projects.json",

        domains: "../registry/domains.json",

        hubs: "../registry/hubs.json"

    },



    /* ----------------------------------------------------------------------
       BOOKS
       ---------------------------------------------------------------------- */

    books: {

        defaultStatus: "Published",

        featuredLimit: 12,

        newestLimit: 12,

        foundationalLimit: 12

    },



    /* ----------------------------------------------------------------------
       ASSETS
       ---------------------------------------------------------------------- */

    assets: {

        imageFolder: "../images/",

        coverFolder: "../",

        pdfFolder: "../",

        favicon: "../images/favicon/favicon.ico"

    },



    /* ----------------------------------------------------------------------
       UI
       ---------------------------------------------------------------------- */

    ui: {

        containers: {

            featured: "featured-books",

            foundational: "foundational-books",

            library: "library-books"

        }

    },



    /* ----------------------------------------------------------------------
       CACHE
       ---------------------------------------------------------------------- */

    cache: {

        enabled: true,

        duration: 300000

    },



    /* ----------------------------------------------------------------------
       FEATURES
       ---------------------------------------------------------------------- */

    features: {

        statistics: true,

        search: false,

        filters: false,

        knowledgeGraph: false,

        aiAssistant: false

    },



    /* ----------------------------------------------------------------------
       LOGGING
       ---------------------------------------------------------------------- */

    logging: {

        enabled: true,

        showWarnings: true,

        showErrors: true

    },



    /* ----------------------------------------------------------------------
       API
       ---------------------------------------------------------------------- */

    api: {

        version: "1.0"

    }

});

/* ==========================================================================
   GLOBAL EXPORT
   ========================================================================== */

window.SKE_CONFIG = SKE_CONFIG;

/* ==========================================================================
   VERSION
   ========================================================================== */

console.info(

    `${SKE_CONFIG.engine.name} ${SKE_CONFIG.engine.version} loaded.`

);

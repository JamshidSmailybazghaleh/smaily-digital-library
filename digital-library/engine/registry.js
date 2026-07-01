/******************************************************************************
 *
 *  Smaily Knowledge Engine (SKE)
 *
 *  File:
 *      registry.js
 *
 *  Version:
 *      1.0.0
 *
 *  Status:
 *      Production
 *
 *  Purpose:
 *      Registry Loader
 *
 ******************************************************************************/

"use strict";

/* ==========================================================================
   REGISTRY MODULE
   ========================================================================== */

const SKE_REGISTRY = {

    data: {

        books: [],

        authors: [],

        projects: [],

        domains: [],

        hubs: []

    },

    loaded: false,



    /* ----------------------------------------------------------------------
       Generic JSON Loader
       ---------------------------------------------------------------------- */

    async loadJSON(path) {

        const response = await fetch(path);

        if (!response.ok) {

            throw new Error(

                `Registry Load Error: ${path}`

            );

        }

        return await response.json();

    },



    /* ----------------------------------------------------------------------
       Load Books
       ---------------------------------------------------------------------- */

    async loadBooks() {

        const registry = await this.loadJSON(

            SKE_CONFIG.registry.books

        );

        this.data.books = registry.books || [];

    },



    /* ----------------------------------------------------------------------
       Load Authors
       ---------------------------------------------------------------------- */

    async loadAuthors() {

        try {

            const registry = await this.loadJSON(

                SKE_CONFIG.registry.authors

            );

            this.data.authors = registry.authors || [];

        }

        catch {

            this.data.authors = [];

        }

    },



    /* ----------------------------------------------------------------------
       Load Projects
       ---------------------------------------------------------------------- */

    async loadProjects() {

        try {

            const registry = await this.loadJSON(

                SKE_CONFIG.registry.projects

            );

            this.data.projects = registry.projects || [];

        }

        catch {

            this.data.projects = [];

        }

    },



    /* ----------------------------------------------------------------------
       Load Domains
       ---------------------------------------------------------------------- */

    async loadDomains() {

        try {

            const registry = await this.loadJSON(

                SKE_CONFIG.registry.domains

            );

            this.data.domains = registry.domains || [];

        }

        catch {

            this.data.domains = [];

        }

    },



    /* ----------------------------------------------------------------------
       Load Hubs
       ---------------------------------------------------------------------- */

    async loadHubs() {

        try {

            const registry = await this.loadJSON(

                SKE_CONFIG.registry.hubs

            );

            this.data.hubs = registry.hubs || [];

        }

        catch {

            this.data.hubs = [];

        }

    },



    /* ----------------------------------------------------------------------
       Load Everything
       ---------------------------------------------------------------------- */

    async initialize() {

        console.info("Loading Registry...");

        await Promise.all([

            this.loadBooks(),

            this.loadAuthors(),

            this.loadProjects(),

            this.loadDomains(),

            this.loadHubs()

        ]);

        this.loaded = true;

        console.info("Registry Loaded.");

        console.info(

            `Books: ${this.data.books.length}`

        );

    },



    /* ----------------------------------------------------------------------
       Public Getters
       ---------------------------------------------------------------------- */

    getBooks() {

        return this.data.books;

    },



    getAuthors() {

        return this.data.authors;

    },



    getProjects() {

        return this.data.projects;

    },



    getDomains() {

        return this.data.domains;

    },



    getHubs() {

        return this.data.hubs;

    }

};

/* ==========================================================================
   GLOBAL EXPORT
   ========================================================================== */

window.SKE_REGISTRY = SKE_REGISTRY;

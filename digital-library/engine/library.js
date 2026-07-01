/******************************************************************************
 *
 *  Smaily Knowledge Engine (SKE)
 *
 *  File:
 *      library.js
 *
 *  Version:
 *      1.0.0
 *
 *  Status:
 *      Production
 *
 *  Purpose:
 *      Digital Library Manager
 *
 ******************************************************************************/

"use strict";

/* ==========================================================================
   LIBRARY
   ========================================================================== */

const SKE_LIBRARY = {

    /* ----------------------------------------------------------------------
       All Published Books
    ---------------------------------------------------------------------- */

    getPublishedBooks() {

        return SKE_REGISTRY
            .getBooks()
            .filter(book =>
                book.status ===
                SKE_CONFIG.constants.STATUS_PUBLISHED
            );

    },



    /* ----------------------------------------------------------------------
       Featured
    ---------------------------------------------------------------------- */

    getFeaturedBooks() {

        return this
            .getPublishedBooks()
            .filter(book => book.featured === true);

    },



    /* ----------------------------------------------------------------------
       Foundational
    ---------------------------------------------------------------------- */

    getFoundationalBooks() {

        return this
            .getPublishedBooks()
            .filter(book => book.foundational === true);

    },



    /* ----------------------------------------------------------------------
       Latest
    ---------------------------------------------------------------------- */

    getLatestBooks(limit = 10) {

        return this
            .getPublishedBooks()
            .slice(0, limit);

    },



    /* ----------------------------------------------------------------------
       By Category
    ---------------------------------------------------------------------- */

    getBooksByCategory(category) {

        return this
            .getPublishedBooks()
            .filter(book =>
                book.category === category
            );

    },



    /* ----------------------------------------------------------------------
       By Language
    ---------------------------------------------------------------------- */

    getBooksByLanguage(language) {

        return this
            .getPublishedBooks()
            .filter(book =>
                book.language === language
            );

    },



    /* ----------------------------------------------------------------------
       By Author
    ---------------------------------------------------------------------- */

    getBooksByAuthor(author) {

        return this
            .getPublishedBooks()
            .filter(book =>
                book.author === author
            );

    },



    /* ----------------------------------------------------------------------
       Find by ID
    ---------------------------------------------------------------------- */

    getBook(id) {

        return this
            .getPublishedBooks()
            .find(book =>
                book.id === id
            );

    },



    /* ----------------------------------------------------------------------
       Render Featured
    ---------------------------------------------------------------------- */

    renderFeatured() {

        SKE_RENDERER.renderCollection(

            SKE_CONFIG.ui.containers.featured,

            this.getFeaturedBooks()

        );

    },



    /* ----------------------------------------------------------------------
       Render Foundational
    ---------------------------------------------------------------------- */

    renderFoundational() {

        SKE_RENDERER.renderCollection(

            SKE_CONFIG.ui.containers.foundational,

            this.getFoundationalBooks()

        );

    },



    /* ----------------------------------------------------------------------
       Render Complete Library
    ---------------------------------------------------------------------- */

    renderLibrary() {

        SKE_RENDERER.renderCollection(

            SKE_CONFIG.ui.containers.library,

            this.getPublishedBooks()

        );

    },



    /* ----------------------------------------------------------------------
       Render Everything
    ---------------------------------------------------------------------- */

    renderAll() {

        this.renderFeatured();

        this.renderFoundational();

        this.renderLibrary();

        console.info(

            "Library Ready."

        );

    }

};

/* ==========================================================================
   EXPORT
   ========================================================================== */

window.SKE_LIBRARY = SKE_LIBRARY;

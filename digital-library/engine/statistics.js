/******************************************************************************
 *
 *  Smaily Knowledge Engine (SKE)
 *
 *  File:
 *      statistics.js
 *
 *  Version:
 *      1.0.0
 *
 *  Status:
 *      Production
 *
 *  Purpose:
 *      Knowledge Statistics Engine
 *
 ******************************************************************************/

"use strict";

/* ==========================================================================
   STATISTICS
   ========================================================================== */

const SKE_STATISTICS = {

    /* ----------------------------------------------------------------------
       Total Published Books
    ---------------------------------------------------------------------- */

    totalBooks() {

        return SKE_LIBRARY
            .getPublishedBooks()
            .length;

    },



    /* ----------------------------------------------------------------------
       Featured Books
    ---------------------------------------------------------------------- */

    featuredBooks() {

        return SKE_LIBRARY
            .getFeaturedBooks()
            .length;

    },



    /* ----------------------------------------------------------------------
       Foundational Books
    ---------------------------------------------------------------------- */

    foundationalBooks() {

        return SKE_LIBRARY
            .getFoundationalBooks()
            .length;

    },



    /* ----------------------------------------------------------------------
       Categories
    ---------------------------------------------------------------------- */

    totalCategories() {

        const categories = new Set();

        SKE_LIBRARY
            .getPublishedBooks()
            .forEach(book => {

                if (book.category) {

                    categories.add(book.category);

                }

            });

        return categories.size;

    },



    /* ----------------------------------------------------------------------
       Languages
    ---------------------------------------------------------------------- */

    totalLanguages() {

        const languages = new Set();

        SKE_LIBRARY
            .getPublishedBooks()
            .forEach(book => {

                if (book.language) {

                    languages.add(book.language);

                }

            });

        return languages.size;

    },



    /* ----------------------------------------------------------------------
       Authors
    ---------------------------------------------------------------------- */

    totalAuthors() {

        const authors = new Set();

        SKE_LIBRARY
            .getPublishedBooks()
            .forEach(book => {

                if (book.author) {

                    authors.add(book.author);

                }

            });

        return authors.size;

    },



    /* ----------------------------------------------------------------------
       Projects
    ---------------------------------------------------------------------- */

    totalProjects() {

        return SKE_REGISTRY
            .getProjects()
            .length;

    },



    /* ----------------------------------------------------------------------
       Domains
    ---------------------------------------------------------------------- */

    totalDomains() {

        return SKE_REGISTRY
            .getDomains()
            .length;

    },



    /* ----------------------------------------------------------------------
       Full Summary
    ---------------------------------------------------------------------- */

    summary() {

        return {

            books:

                this.totalBooks(),

            featured:

                this.featuredBooks(),

            foundational:

                this.foundationalBooks(),

            authors:

                this.totalAuthors(),

            projects:

                this.totalProjects(),

            domains:

                this.totalDomains(),

            categories:

                this.totalCategories(),

            languages:

                this.totalLanguages()

        };

    },



    /* ----------------------------------------------------------------------
       Console Report
    ---------------------------------------------------------------------- */

    report() {

        console.table(

            this.summary()

        );

    }

};

/* ==========================================================================
   EXPORT
   ========================================================================== */

window.SKE_STATISTICS = SKE_STATISTICS;

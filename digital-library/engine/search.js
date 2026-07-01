/******************************************************************************
 *
 *  Smaily Knowledge Engine (SKE)
 *
 *  File:
 *      search.js
 *
 *  Version:
 *      1.0.0
 *
 *  Status:
 *      Production
 *
 *  Purpose:
 *      Search Engine
 *
 ******************************************************************************/

"use strict";

/* ==========================================================================
   SEARCH
   ========================================================================== */

const SKE_SEARCH = {

    /* ----------------------------------------------------------------------
       Normalize
    ---------------------------------------------------------------------- */

    normalize(text) {

        if (!text) return "";

        return text
            .toString()
            .toLowerCase()
            .trim();

    },



    /* ----------------------------------------------------------------------
       Contains
    ---------------------------------------------------------------------- */

    contains(source, keyword) {

        return this
            .normalize(source)
            .includes(

                this.normalize(keyword)

            );

    },



    /* ----------------------------------------------------------------------
       Search
    ---------------------------------------------------------------------- */

    search(keyword) {

        if (!keyword) {

            return [];

        }

        return SKE_LIBRARY

            .getPublishedBooks()

            .filter(book => {

                return (

                    this.contains(

                        book.title,

                        keyword

                    )

                    ||

                    this.contains(

                        book.author,

                        keyword

                    )

                    ||

                    this.contains(

                        book.category,

                        keyword

                    )

                    ||

                    this.contains(

                        book.language,

                        keyword

                    )

                    ||

                    this.contains(

                        book.status,

                        keyword

                    )

                );

            });

    },



    /* ----------------------------------------------------------------------
       Search by Title
    ---------------------------------------------------------------------- */

    title(keyword) {

        return SKE_LIBRARY

            .getPublishedBooks()

            .filter(book =>

                this.contains(

                    book.title,

                    keyword

                )

            );

    },



    /* ----------------------------------------------------------------------
       Search by Author
    ---------------------------------------------------------------------- */

    author(keyword) {

        return SKE_LIBRARY

            .getPublishedBooks()

            .filter(book =>

                this.contains(

                    book.author,

                    keyword

                )

            );

    },



    /* ----------------------------------------------------------------------
       Search by Category
    ---------------------------------------------------------------------- */

    category(keyword) {

        return SKE_LIBRARY

            .getPublishedBooks()

            .filter(book =>

                this.contains(

                    book.category,

                    keyword

                )

            );

    },



    /* ----------------------------------------------------------------------
       Search by Language
    ---------------------------------------------------------------------- */

    language(keyword) {

        return SKE_LIBRARY

            .getPublishedBooks()

            .filter(book =>

                this.contains(

                    book.language,

                    keyword

                )

            );

    },



    /* ----------------------------------------------------------------------
       Search by ID
    ---------------------------------------------------------------------- */

    id(id) {

        return SKE_LIBRARY

            .getPublishedBooks()

            .find(book =>

                book.id === id

            );

    },



    /* ----------------------------------------------------------------------
       Count
    ---------------------------------------------------------------------- */

    count(keyword) {

        return this

            .search(keyword)

            .length;

    },



    /* ----------------------------------------------------------------------
       Exists
    ---------------------------------------------------------------------- */

    exists(keyword) {

        return this.count(keyword) > 0;

    }

};

/* ==========================================================================
   EXPORT
   ========================================================================== */

window.SKE_SEARCH = SKE_SEARCH;

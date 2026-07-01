/******************************************************************************
 *
 *  Smaily Knowledge Engine (SKE)
 *
 *  File:
 *      validator.js
 *
 *  Version:
 *      1.0.0
 *
 *  Status:
 *      Production
 *
 *  Purpose:
 *      Registry Validation
 *
 ******************************************************************************/

"use strict";

/* ==========================================================================
   VALIDATOR
   ========================================================================== */

const SKE_VALIDATOR = {

    errors: [],

    warnings: [],



    /* ----------------------------------------------------------------------
       Reset
    ---------------------------------------------------------------------- */

    reset() {

        this.errors = [];

        this.warnings = [];

    },



    /* ----------------------------------------------------------------------
       Error
    ---------------------------------------------------------------------- */

    error(message) {

        this.errors.push(message);

        console.error(message);

    },



    /* ----------------------------------------------------------------------
       Warning
    ---------------------------------------------------------------------- */

    warning(message) {

        this.warnings.push(message);

        console.warn(message);

    },



    /* ----------------------------------------------------------------------
       Required Fields
    ---------------------------------------------------------------------- */

    requiredFields: [

        "id",

        "title",

        "author",

        "cover",

        "page",

        "status"

    ],



    /* ----------------------------------------------------------------------
       Validate Book
    ---------------------------------------------------------------------- */

    validateBook(book) {

        this.requiredFields.forEach(field => {

            if (

                book[field] === undefined ||

                book[field] === null ||

                book[field] === ""

            ) {

                this.error(

                    `Missing field "${field}" in book "${book.title || "Unknown"}"`

                );

            }

        });

    },



    /* ----------------------------------------------------------------------
       Duplicate IDs
    ---------------------------------------------------------------------- */

    validateDuplicateIDs(books) {

        const ids = new Set();

        books.forEach(book => {

            if (ids.has(book.id)) {

                this.error(

                    `Duplicate Book ID: ${book.id}`

                );

            }

            ids.add(book.id);

        });

    },



    /* ----------------------------------------------------------------------
       Duplicate Titles
    ---------------------------------------------------------------------- */

    validateDuplicateTitles(books) {

        const titles = new Set();

        books.forEach(book => {

            if (titles.has(book.title)) {

                this.warning(

                    `Duplicate Title: ${book.title}`

                );

            }

            titles.add(book.title);

        });

    },



    /* ----------------------------------------------------------------------
       Status
    ---------------------------------------------------------------------- */

    validateStatus(book) {

        const valid = [

            "Published",

            "Draft",

            "Archived"

        ];

        if (!valid.includes(book.status)) {

            this.warning(

                `Unknown Status: ${book.status}`

            );

        }

    },



    /* ----------------------------------------------------------------------
       Page Path
    ---------------------------------------------------------------------- */

    validatePage(book) {

        if (!book.page.startsWith("books/")) {

            this.warning(

                `Unexpected Page Path: ${book.page}`

            );

        }

    },



    /* ----------------------------------------------------------------------
       Cover
    ---------------------------------------------------------------------- */

    validateCover(book) {

        if (

            !book.cover.endsWith(".png") &&

            !book.cover.endsWith(".jpg") &&

            !book.cover.endsWith(".webp")

        ) {

            this.warning(

                `Unexpected Cover Format: ${book.cover}`

            );

        }

    },



    /* ----------------------------------------------------------------------
       Validate Registry
    ---------------------------------------------------------------------- */

    validateBooks(books) {

        this.reset();

        this.validateDuplicateIDs(books);

        this.validateDuplicateTitles(books);

        books.forEach(book => {

            this.validateBook(book);

            this.validateStatus(book);

            this.validatePage(book);

            this.validateCover(book);

        });

        console.info(

            `Validation Finished

Errors: ${this.errors.length}

Warnings: ${this.warnings.length}`

        );

        return {

            valid: this.errors.length === 0,

            errors: this.errors,

            warnings: this.warnings

        };

    }

};

/* ==========================================================================
   EXPORT
   ========================================================================== */

window.SKE_VALIDATOR = SKE_VALIDATOR;

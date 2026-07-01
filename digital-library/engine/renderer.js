/******************************************************************************
 *
 *  Smaily Knowledge Engine (SKE)
 *
 *  File:
 *      renderer.js
 *
 *  Version:
 *      1.0.0
 *
 *  Status:
 *      Production
 *
 *  Purpose:
 *      HTML Rendering Engine
 *
 ******************************************************************************/

"use strict";

/* ==========================================================================
   RENDERER
   ========================================================================== */

const SKE_RENDERER = {

    /* ----------------------------------------------------------------------
       Create Book Card
    ---------------------------------------------------------------------- */

    createBookCard(book) {

        const card = document.createElement("article");

        card.className = "ske-book-card";

        card.innerHTML = `

            <img
                class="ske-book-cover"
                src="../${book.cover}"
                alt="${book.title}">

            <div class="ske-book-content">

                <h3 class="ske-book-title">

                    ${book.title}

                </h3>

                <p class="ske-book-author">

                    ${book.author}

                </p>

                <p class="ske-book-type">

                    ${book.type || "Book"}

                </p>

                <p class="ske-book-status">

                    ${book.status}

                </p>

                <a

                    class="ske-button"

                    href="../${book.page}"

                >

                    Open Book

                </a>

            </div>

        `;

        return card;

    },



    /* ----------------------------------------------------------------------
       Render Collection
    ---------------------------------------------------------------------- */

    renderCollection(containerId, books) {

        const container =

            document.getElementById(containerId);

        if (!container) {

            return;

        }

        container.innerHTML = "";

        books.forEach(book => {

            container.appendChild(

                this.createBookCard(book)

            );

        });

    },



    /* ----------------------------------------------------------------------
       Featured Books
    ---------------------------------------------------------------------- */

    renderFeatured() {

        const books =

            SKE_REGISTRY

            .getBooks()

            .filter(book => book.featured);

        this.renderCollection(

            SKE_CONFIG.ui.containers.featured,

            books

        );

    },



    /* ----------------------------------------------------------------------
       Foundational Books
    ---------------------------------------------------------------------- */

    renderFoundational() {

        const books =

            SKE_REGISTRY

            .getBooks()

            .filter(book => book.foundational);

        this.renderCollection(

            SKE_CONFIG.ui.containers.foundational,

            books

        );

    },



    /* ----------------------------------------------------------------------
       Complete Library
    ---------------------------------------------------------------------- */

    renderLibrary() {

        const books =

            SKE_REGISTRY

            .getBooks()

            .filter(book =>

                book.status ===

                SKE_CONFIG.constants.STATUS_PUBLISHED

            );

        this.renderCollection(

            SKE_CONFIG.ui.containers.library,

            books

        );

    },



    /* ----------------------------------------------------------------------
       Render All
    ---------------------------------------------------------------------- */

    renderAll() {

        this.renderFeatured();

        this.renderFoundational();

        this.renderLibrary();

        console.info(

            "Rendering Finished."

        );

    }

};

/* ==========================================================================
   EXPORT
   ========================================================================== */

window.SKE_RENDERER = SKE_RENDERER;

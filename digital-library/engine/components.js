/******************************************************************************
 *
 *  Smaily Knowledge Engine (SKE)
 *
 *  File:
 *      components.js
 *
 *  Version:
 *      1.0.0
 *
 *  Status:
 *      Production
 *
 *  Purpose:
 *      Reusable UI Components
 *
 ******************************************************************************/

"use strict";

/* ==========================================================================
   COMPONENTS
   ========================================================================== */

const SKE_COMPONENTS = {

    /* ----------------------------------------------------------------------
       BOOK CARD
    ---------------------------------------------------------------------- */

    bookCard(book) {

        const card = document.createElement("article");

        card.className = "ske-book-card";

        card.innerHTML = `

            <img

                class="ske-book-cover"

                src="../${book.cover}"

                alt="${book.title}"

            >

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

                ${this.badge(book.status)}

                ${this.button(
                    "Open Book",
                    "../" + book.page
                )}

            </div>

        `;

        return card;

    },



    /* ----------------------------------------------------------------------
       BUTTON
    ---------------------------------------------------------------------- */

    button(label, url) {

        return `

            <a

                class="ske-button"

                href="${url}"

            >

                ${label}

            </a>

        `;

    },



    /* ----------------------------------------------------------------------
       BADGE
    ---------------------------------------------------------------------- */

    badge(text) {

        return `

            <span class="ske-badge">

                ${text}

            </span>

        `;

    },



    /* ----------------------------------------------------------------------
       SECTION TITLE
    ---------------------------------------------------------------------- */

    sectionTitle(title) {

        return `

            <h2 class="ske-section-title">

                ${title}

            </h2>

        `;

    },



    /* ----------------------------------------------------------------------
       STATISTIC CARD
    ---------------------------------------------------------------------- */

    statistic(title, value) {

        return `

            <div class="ske-stat-card">

                <h3>

                    ${value}

                </h3>

                <p>

                    ${title}

                </p>

            </div>

        `;

    },



    /* ----------------------------------------------------------------------
       MESSAGE
    ---------------------------------------------------------------------- */

    message(text) {

        return `

            <div class="ske-message">

                ${text}

            </div>

        `;

    },



    /* ----------------------------------------------------------------------
       EMPTY STATE
    ---------------------------------------------------------------------- */

    empty(text = "No data available.") {

        return `

            <div class="ske-empty">

                ${text}

            </div>

        `;

    },



    /* ----------------------------------------------------------------------
       LOADING
    ---------------------------------------------------------------------- */

    loading() {

        return `

            <div class="ske-loading">

                Loading...

            </div>

        `;

    }

};

/* ==========================================================================
   EXPORT
   ========================================================================== */

window.SKE_COMPONENTS = SKE_COMPONENTS;

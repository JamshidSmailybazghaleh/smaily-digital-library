/******************************************************************************
 *
 *  Smaily Knowledge Engine (SKE)
 *
 *  File:
 *      utils.js
 *
 *  Part:
 *      1
 *
 *  Version:
 *      1.0.0
 *
 *  Status:
 *      Production
 *
 *  Purpose:
 *      Common Utility Functions
 *
 ******************************************************************************/

"use strict";

/* ==========================================================================
   UTILITIES
   ========================================================================== */

const SKE_UTILS = {

    /* ----------------------------------------------------------------------
       TYPE CHECKING
    ---------------------------------------------------------------------- */

    isString(value) {
        return typeof value === "string";
    },

    isNumber(value) {
        return typeof value === "number" && !isNaN(value);
    },

    isArray(value) {
        return Array.isArray(value);
    },

    isObject(value) {
        return value !== null &&
               typeof value === "object" &&
               !Array.isArray(value);
    },

    isEmpty(value) {

        if (value === null || value === undefined)
            return true;

        if (typeof value === "string")
            return value.trim() === "";

        if (Array.isArray(value))
            return value.length === 0;

        if (this.isObject(value))
            return Object.keys(value).length === 0;

        return false;

    },



    /* ----------------------------------------------------------------------
       STRING
    ---------------------------------------------------------------------- */

    trim(text) {

        if (!this.isString(text))
            return "";

        return text.trim();

    },

    normalize(text) {

        if (!this.isString(text))
            return "";

        return text
            .trim()
            .toLowerCase();

    },

    capitalize(text) {

        if (!this.isString(text))
            return "";

        return text.charAt(0).toUpperCase() +
               text.slice(1);

    },



    /* ----------------------------------------------------------------------
       NUMBER
    ---------------------------------------------------------------------- */

    formatNumber(value) {

        if (!this.isNumber(value))
            return "0";

        return value.toLocaleString();

    },



    /* ----------------------------------------------------------------------
       OBJECT
    ---------------------------------------------------------------------- */

    clone(object) {

        return JSON.parse(
            JSON.stringify(object)
        );

    },



    /* ----------------------------------------------------------------------
       ARRAY
    ---------------------------------------------------------------------- */

    unique(array) {

        return [...new Set(array)];

    },



    /* ----------------------------------------------------------------------
       ID
    ---------------------------------------------------------------------- */

    randomId(prefix = "ske") {

        return `${prefix}-${Math.random()
            .toString(36)
            .substring(2,10)}`;

    },



    /* ----------------------------------------------------------------------
       DATE
    ---------------------------------------------------------------------- */

    now() {

        return new Date();

    },

    timestamp() {

        return Date.now();

    },



    /* ----------------------------------------------------------------------
       HTML
    ---------------------------------------------------------------------- */

    escapeHTML(text) {

        if (!this.isString(text))
            return "";

        return text

            .replace(/&/g,"&amp;")
            .replace(/</g,"&lt;")
            .replace(/>/g,"&gt;")
            .replace(/"/g,"&quot;")
            .replace(/'/g,"&#039;");

    },



    /* ----------------------------------------------------------------------
       DELAY
    ---------------------------------------------------------------------- */

    debounce(callback, delay = 300) {

        let timer;

        return (...args) => {

            clearTimeout(timer);

            timer = setTimeout(() => {

                callback(...args);

            }, delay);

        };

    },



    throttle(callback, limit = 300) {

        let waiting = false;

        return (...args) => {

            if (!waiting) {

                callback(...args);

                waiting = true;

                setTimeout(() => {

                    waiting = false;

                }, limit);

            }

        };

    }

};

/* ==========================================================================
   EXPORT
   ========================================================================== */

window.SKE_UTILS = SKE_UTILS;
/******************************************************************************
 *
 *  Smaily Knowledge Engine (SKE)
 *
 *  File:
 *      utils.js
 *
 *  Part:
 *      2
 *
 *  Version:
 *      1.0.0
 *
 ******************************************************************************/

"use strict";

/* ==========================================================================
   URL
   ========================================================================== */

Object.assign(SKE_UTILS, {

    currentURL() {

        return window.location.href;

    },

    currentPath() {

        return window.location.pathname;

    },

    open(url) {

        window.location.href = url;

    },

    openNewTab(url) {

        window.open(url, "_blank");

    }

});


/* ==========================================================================
   STORAGE
   ========================================================================== */

Object.assign(SKE_UTILS, {

    save(key, value) {

        localStorage.setItem(

            key,

            JSON.stringify(value)

        );

    },

    load(key) {

        const value =

            localStorage.getItem(key);

        if (!value) return null;

        return JSON.parse(value);

    },

    remove(key) {

        localStorage.removeItem(key);

    },

    clearStorage() {

        localStorage.clear();

    }

});


/* ==========================================================================
   DOWNLOAD
   ========================================================================== */

Object.assign(SKE_UTILS, {

    download(url) {

        const a = document.createElement("a");

        a.href = url;

        a.download = "";

        document.body.appendChild(a);

        a.click();

        a.remove();

    }

});


/* ==========================================================================
   CLIPBOARD
   ========================================================================== */

Object.assign(SKE_UTILS, {

    async copy(text) {

        try {

            await navigator.clipboard.writeText(text);

            return true;

        }

        catch {

            return false;

        }

    }

});


/* ==========================================================================
   RANDOM
   ========================================================================== */

Object.assign(SKE_UTILS, {

    random(min, max) {

        return Math.floor(

            Math.random() *

            (max - min + 1)

        ) + min;

    }

});


/* ==========================================================================
   HASH
   ========================================================================== */

Object.assign(SKE_UTILS, {

    simpleHash(text) {

        let hash = 0;

        if (!text) return hash;

        for (

            let i = 0;

            i < text.length;

            i++

        ) {

            hash =

                ((hash << 5) - hash)

                +

                text.charCodeAt(i);

            hash |= 0;

        }

        return hash;

    }

});


/* ==========================================================================
   UUID
   ========================================================================== */

Object.assign(SKE_UTILS, {

    uuid() {

        return

        "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"

        .replace(

            /[xy]/g,

            c => {

                const r =

                    Math.random()*16|0;

                const v =

                    c==="x"

                    ? r

                    : (r&0x3|0x8);

                return v.toString(16);

            }

        );

    }

});


/* ==========================================================================
   IMAGE
   ========================================================================== */

Object.assign(SKE_UTILS, {

    preloadImage(url) {

        const img = new Image();

        img.src = url;

        return img;

    }

});


/* ==========================================================================
   VERSION
   ========================================================================== */

console.info(

    "SKE Utilities Loaded."

);


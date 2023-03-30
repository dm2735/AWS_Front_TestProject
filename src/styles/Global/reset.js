import { css } from "@emotion/react"

export const reset = css`

* {
    box-sizing: border-box;
    color: #121212;
    font-size: 14px;
}

body {
    margin: 0;
}

h1, h2, h3, p, ul {
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
}

ul {
    list-style-type: none;
}
    `;
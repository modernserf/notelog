import React from "react"
import S from "./style.css"

// would have been interesting to test my theory regarding generators
// for animation. Alas, I've already sunk far too much time into this
export function Loading ({ active }) {
    const strokeWidth = 10
    const r = 50 + strokeWidth
    const c = (r - strokeWidth) * 2 * Math.PI

    return (
        <div className={`${S.loading_spinner}
            ${active ? S.active : ""}`}>
            <svg style={{
                width: r * 2,
                height: r * 2,
                marginTop: -r,
                marginLeft: -r,
            }}>
                <circle cx={r} cy={r} r={r - strokeWidth}
                    style={{
                        strokeDasharray: c,
                        strokeWidth,
                    }}/>
            </svg>
        </div>
    )
}

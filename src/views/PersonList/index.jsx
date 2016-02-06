import React from "react"
import S from "./style.css"
import { Link } from "react-router"
import { connect } from "react-redux"
import { teamSelector } from "data"
import { Loading } from "../Loading"

function PersonListItem ({ data }) {
    return (
        <Link to={`/people/${data.id}`} className={S.person}>
            <div className={S.photo_wrap}>
                <img src={data.photoURL}/>
            </div>
            <div className={S.text_wrap}>
                <h2 className={S.person_name}>{data.name}</h2>
                <div className={S.person_title}>{data.title}</div>
            </div>
        </Link>
    )
}

// TODO: /people on esc
function PersonDetailItem ({ data }) {
    if (!data) { return <noscript/> }

    const content = data.profile.map((p, i) =>
        <p key={i}>{p}</p>)

    return (
        <section className={S.person_detail}>
            <header className={S.detail_header}>
                <div className={S.photo_wrap}>
                    <img src={data.photoURL}/>
                </div>
                <div className={S.text_wrap}>
                    <h2 className={S.detail_name}>{data.name}</h2>
                    <div className={S.detail_title}>{data.title}</div>
                </div>
                <Link to="/people" className={S.detail_close}
                    title="Back to team list">&times;</Link>
            </header>
            <div className={S.detail_content}>
                {content}
            </div>
        </section>
    )
}

function PersonList (props) {
    const { list, map, loading, params, lastId } = props
    const active = !!params.id
    const selected = map.get(params.id || lastId)

    const teamList = list.map((p, i) =>
        <li key={p.id}
            className={S.person_wrap}
            style={active ? {transform: scatterTo(i, list.length)} : {}}>
            <PersonListItem data={p}/></li>)

    return (
        <div className={S.page}>
            <header className={S.page_header}>
                <Hero/>
            </header>
            <div className={`${S.team_container}
                ${active ? S.active : ""}`}>
                <Loading active={loading}/>
                <div className={S.detail_container}>
                    <PersonDetailItem data={selected}/>
                </div>
                <ul className={S.team_list}>{teamList}</ul>
            </div>
        </div>
    )
}

function Hero () {
    return (
        <div className={S.hero_overlay}>
            <h1 className={S.page_title}>Our Incredible Team</h1>
            <p><strong>Genius? Here at BizCorp, we don't use the term
                lightly.</strong> But consectetur adipisicing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna
             aliqua. Ut enim ad minim veniam, quis nostrud exercitation
             ullamco laboris nisi ut aliquip ex ea commodo consequat.
             Duis aute irure dolor in reprehenderit in voluptate velit
             esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
             occaecat cupidatat non proident, sunt in culpa qui officia
             deserunt mollit anim id est laborum.</p>
        </div>
    )
}

export const PersonListView = connect(
    (state) => state[teamSelector]
)(PersonList)

function scatterTo (index, count) {
    const th = Math.PI * 5 * (index / count)
    const r = 5000
    const [x, y] = polarToCartesian(r, th)
    return `translate3d(${x}px,${y}px,${index * 10}px)`
}

const polarToCartesian = (radius, theta) => [
    radius * Math.cos(theta - Math.PI / 2),
    radius * Math.sin(theta - Math.PI / 2),
]

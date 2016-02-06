import S from "./style.css"
import React from "react"
import { Link } from "react-router"
import { connect } from "react-redux"

export function PersonListItem ({ data }) {
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

export function PersonList ({ data, loading }) {
    const teamList = data.map((p) =>
        <li key={p.id}><PersonListItem data={p}/></li>)

    return (
        <div className={S.page}>
            <header className={S.page_header}>
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
            </header>
            <div className={S.team_container}>
                <ul className={S.team_list}>{teamList}</ul>
            </div>
        </div>
    )
}

export const PersonListView = connect((state) => ({
    loading: state["team/SELECTOR"].loading,
    data: state["team/SELECTOR"].list,
}))(PersonList)

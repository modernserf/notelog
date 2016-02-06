// If you think this is over-engineered, an earlier idea for this
// generated a complete history for each employee, including their projects,
// promotions and performance reviews.
import faker from "faker"
import { sleep } from "util/sleep"

// uifaces.com, via
//  $(".face-action").map((i,it) =>
//      $(it).find("img").attr("src").match(/twitter\/(\S+)\//)[1] )
const avatars = ["sauro", "jsa", "zack415", "k", "jadlimcaco", "rem",
    "brad_frost", "abinav_t", "ritu", "csswizardry", "kastov_yury", "dzyngiri",
    "talhaconcepts", "azielsilas", "felipebsb", "tomaslau",
    "felipenogs", "tonystubblebine", "guiiipontes", "nexy_dre", "mlane",
    "c_southam", "marcosmoralez", "mantia", "davidburlton",
    "kerem", "adhamdannaway", "gt", "nzcode", "_hartjeg",
    "tonypeterson", "motherfuton", "jm_denis", "towhidzaman", "peterlandt",
    "jaredfitch", "iconfinder", "leemunroe", "mghoz", "peterme", "shalt0ni",
    "mattsince87", "dancounsell", "adellecharles", "getsocial_now",
    "eduardo_olv", "sillyleo", "vista", "cemshid", "kurafire", "abecherian",
    "vladarbatov", "andyvitale", "rogie", "enda", "robertovivancos", "jina",
    "mizko", "rssems", "chadengle", "glif", "mattchevy", "sindresorhus",
    "minipunk", "tsu_vip"]

function * titles () {
    yield* [
        "CEO & Founder",
        "CTO",
        "COO",
        "Finance Director",
        "Community Evangelist",
    ]
    while (true) { yield aLowlyGrunt() }
}

function aLowlyGrunt () {
    const sw = Math.random()
    if (sw < 0.5) { return "Engineer" }
    if (sw < 0.75) { return "Designer" }
    if (sw < 0.95) { return "Account Manager" }
    return "Project Manager"
}

function getPeople () {
    const titleGen = titles()

    return avatars.slice(0, 30).map((id) => {
        const f = faker.name.firstName()
        const l = faker.name.lastName()

        return {
            id: id,
            name: `${f} ${l}`,
            title: titleGen.next().value,
            photoURL: `https://s3.amazonaws.com/uifaces/faces/twitter/${id}/128.jpg`,
            email: `${id}@example.com`,
            profile: [
                faker.lorem.paragraph(),
                faker.lorem.paragraph(),
                faker.lorem.paragraph(),
            ],
        }
    })
}

export const index = async () => {
    await sleep(1000) // just so we can see the loading spinner
    return getPeople()
}

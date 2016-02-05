import faker from "faker"
const avatars = ["https://s3.amazonaws.com/uifaces/faces/twitter/iannnnn/128.jpg", "https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg", "https://s3.amazonaws.com/uifaces/faces/twitter/faulknermusic/128.jpg", "https://s3.amazonaws.com/uifaces/faces/twitter/sauro/128.jpg", "https://s3.amazonaws.com/uifaces/faces/twitter/zack415/128.jpg", "https://s3.amazonaws.com/uifaces/faces/twitter/iflendra/128.jpg", "https://s3.amazonaws.com/uifaces/faces/twitter/k/128.jpg", "https://s3.amazonaws.com/uifaces/faces/twitter/abinav_t/128.jpg", "https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg", "https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg", "https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg", "https://s3.amazonaws.com/uifaces/faces/twitter/kastov_yury/128.jpg", "https://s3.amazonaws.com/uifaces/faces/twitter/azielsilas/128.jpg", "https://s3.amazonaws.com/uifaces/faces/twitter/ritu/128.jpg", "https://s3.amazonaws.com/uifaces/faces/twitter/csswizardry/128.jpg", "https://s3.amazonaws.com/uifaces/faces/twitter/marcosmoralez/128.jpg", "https://s3.amazonaws.com/uifaces/faces/twitter/tonystubblebine/128.jpg", "https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg", "https://s3.amazonaws.com/uifaces/faces/twitter/mantia/128.jpg", "https://s3.amazonaws.com/uifaces/faces/twitter/eduardo_olv/128.jpg"]

const people = avatars.map((url) => {
    const f = faker.name.firstName()
    const l = faker.name.lastName()

    return {
        id: `${f.toLowerCase()}.${l.toLowerCase()}`,
        name: `${f} ${l}`,
        sortIndex: f.length + 1,
        photoURL: url,
        dateOfBirth: genDOB(),
    }
})

const genDOB = () => [intRange(1950, 1980), intRange(1, 12), intRange(1, 28)]

const intRange = (low, high) => Math.round(Math.random() * high)

// list of teams
// list of titles
// list of projects

// company history -- people are hired, quit, promoted, change projects etc

// const person = {
//     name: "Justin Falcone",
//     dateOfBirth: [1985, 12, 18],
//     sortIndex: 7,
//     photoURL: "",
//     id: "justin.falcone",
//     titleId: "engineer2",
//     teamId: "engineering.media",
//     projectIds: ["ttp", "adcom"], // tags
//
//     history: [] // event log!
// }

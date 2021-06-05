const name = "Shakibul Alam";
const date = new Date();

const headStyle = {
    color: "green",
    backgroundColor: "aliceblue",
    padding: "30px",
    fontSize: "50px"
}

function Card(props) {
    return <div className="card">
        <h3 style={headStyle}>{props.CardTitle}</h3>
        <h3 className="name-style">{props.ShortDes}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
        quaerat natus quasi pariatur
        quisquam deleniti aut
    iusto enim tempora repudiandae?</p>
        <h2>{date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()}</h2>
        <p>Created By: <span style={{ fontWeight: "bold", fontFamily: "Verdana" }}> {name}</span></p>
    </div>
}

export default Card;
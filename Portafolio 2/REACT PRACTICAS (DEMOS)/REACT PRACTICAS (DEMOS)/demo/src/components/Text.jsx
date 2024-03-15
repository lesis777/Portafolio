export default function Text(props){
    return(
        <p style={styles.colorText}>{props.p}</p>
    );
}

const styles = {
    colorText: {
        color: "blue",
        textAling: "center",
        fontSize: 32,
        fontFamily: 'Reboto, Helvetica',
    },
};
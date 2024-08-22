export const InputTitle = ({getLetters, clearInput}) => {
    
    return (
        <>
        <label>Inserta aqui tu titulo</label>
        <input type="text" onKeyUp={getLetters}/>
        <button onClick={clearInput}>Clear</button>
        </>
    )
}
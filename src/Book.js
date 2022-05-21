function Book({book}){
    return(
        <div>
            <h2>{book.title}</h2>
            <img src={"https://www.gutenberg.org/cache/epub/" + book.id.resources}/>
            <img src={"https://www.gutenberg.org/cache/epub/"+book.id+"/pg"+book.id+".cover.medium.jpg"}/>
            <img src={"https://www.gutenberg.org/cache/epub/"+book.id.uri}/>
        </div>
    )
}

export default Book;
import styled from "styled-components"
import config from "../../config.json"

const favoritos = config.favorites

const StyledFavorites = styled.div`
    div{
        display: flex;
        width: 100px;
    }
    a{
        display: flex;
        flex-direction: column;
        margin: 0 20px;
        align-items: center;
    }
    img{
        width: 100px;
        aspect-ratio: 1/1;
        border-radius: 50%;
    }
    p{
        margin: 20px;
        color: ${({theme})=> theme.textColorBase};
        font-family: Helvetica, sans-serif;
        font-size: 14px;
    }
`

function Favorites(){
    return(
        <StyledFavorites>
            <h2>Favoritos:</h2>
            <div>
            {
                favoritos.map((favorito)=>{
                    return(
                        <a key={favorito.url} href={favorito.url}>
                            <img src={favorito.picture}/>
                            <p>{`@${favorito.name}`}</p>
                        </a>
                    )
                })
            }
            </div>
        </StyledFavorites>
    )
}

export default Favorites
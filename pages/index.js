import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import Favorites from "../src/components/Favorites";

function HomePage() {
    const estilosDaHomePage = {
        //"background-color": "red"
    };

    return (
        <>
            <CSSReset />
            <div style={estilosDaHomePage}>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists} />
            </div>
        </>
    );
}

export default HomePage;

const StyledHeader = styled.div`
    .banner-img{
        width: 100%;
        aspect-ratio: 10/2;
        object-fit: cover;
    }
    .user-info {
        img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
function Header() {
    return (
        <StyledHeader>
            <img className="banner-img" src={config.banner}></img>
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`}></img>
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
            </section>
        </StyledHeader>
    );
}

function Timeline(props) {
    const playlistNames = Object.keys(props.playlists);

    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName];

                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>{video.title}</span>
                                    </a>
                                );
                            })}
                        </div>
                    </section>
                );
            })}
            <Favorites favorites={config.favorites}/>
        </StyledTimeline>
    );
}

import React, { useState } from "react";
import SideAds from "../compoments/SideAds";
import Search from "../compoments/Search";
import RAnimeContainer from "../compoments/Recommended-Anime/RAnimeContainer";
import {isMobile} from 'react-device-detect';

export default function Sidebar(prop) {
    const isAnimePage = prop.data
    const animeData = { '1': { 'name': "Nanatsu no Maken ga Shihai suru (Dub)", 'rating': '5', 'view': '5000', 'com': '12', 'img': "https://gogocdn.net/cover/nanatsu-no-maken-ga-shihai-suru-dub.png", "genres": ["Active", "Movie", "iskea"] }, '2': { 'name': 'Mashle (Dub)', 'view': '5000', 'com': '12', 'rating': '5', 'img': 'https://gogocdn.net/cover/mashle-dub.png', "genres": ["Active", "Movie", "iskea"] }, '3': { 'name': 'AI no Idenshi', 'rating': '5', 'view': '5000', 'com': '12', 'img': 'https://gogocdn.net/cover/ai-no-idenshi-1688151375.png', "genres": ["Active", "Movie", "iskea"] }, '4': { "name": "Dekiru Neko wa Kyou mo Yuuutsu", 'rating': '5', 'view': '5000', 'com': '12', "img": "https://gogocdn.net/cover/dekiru-neko-wa-kyou-mo-yuuutsu-1688153516.png", "genres": ["Active", "Movie", "iskea"] }, '5': { "name": "Kanojo, Okarishimasu 3rd Season", 'view': '5000', 'com': '12', 'rating': '5', "img": "https://gogocdn.net/cover/kanojo-okarishimasu-3rd-season-1688155060.png", "genres": ["Active", "Movie", "iskea"] }, '6': { "name": "Sugar Apple Fairy Tale Part 2", 'view': '5000', 'com': '12', 'rating': '5', "img": "https://gogocdn.net/cover/sugar-apple-fairy-tale-part-2.png", "genres": ["Active", "Movie", "iskea"] } }
    const [filteredAnimeData, setFilteredAnimeData] = useState();
    prop.search(filteredAnimeData)


    return (
        <div className="col-lg-4 col-md-6 col-sm-8">
            {isAnimePage && !isMobile ? <Search animeData={animeData} onFilterChange={setFilteredAnimeData} /> : ""}
            <RAnimeContainer />
            <SideAds />
            
            {/**still under devlopement*/}
            {/**<SideComment/>*/}
        </div>)
}

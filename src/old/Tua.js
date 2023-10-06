import React from "react";
import Card from "./Card";

function Tua() {
    const t="#"
    const upanime_data = { '1': { 'name': "Nanatsu no Maken ga Shihai suru (Dub)", 'rating': '5', 'view': '5000', 'com': '12', 'img': "https://gogocdn.net/cover/nanatsu-no-maken-ga-shihai-suru-dub.png", "genres": ["Active", "Movie", "iskea"] }, '2': { 'name': 'Mashle (Dub)', 'view': '5000', 'com': '12', 'rating': '5', 'img': 'https://gogocdn.net/cover/mashle-dub.png', "genres": ["Active", "Movie", "iskea"] }, '3': { 'name': 'AI no Idenshi', 'rating': '5', 'view': '5000', 'com': '12', 'img': 'https://gogocdn.net/cover/ai-no-idenshi-1688151375.png', "genres": ["Active", "Movie", "iskea"] }, '4': { "name": "Dekiru Neko wa Kyou mo Yuuutsu", 'rating': '5', 'view': '5000', 'com': '12', "img": "https://gogocdn.net/cover/dekiru-neko-wa-kyou-mo-yuuutsu-1688153516.png", "genres": ["Active", "Movie", "iskea"] }, '5': { "name": "Kanojo, Okarishimasu 3rd Season", 'view': '5000', 'com': '12', 'rating': '5', "img": "https://gogocdn.net/cover/kanojo-okarishimasu-3rd-season-1688155060.png", "genres": ["Active", "Movie", "iskea"] }, '6': { "name": "Sugar Apple Fairy Tale Part 2", 'view': '5000', 'com': '12', 'rating': '5', "img": "https://gogocdn.net/cover/sugar-apple-fairy-tale-part-2.png", "genres": ["Active", "Movie", "iskea"] } }
    return(
        <div className="trending__product">
        <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-8">
                <div className="section-title">
                    <h4>Upcoming <span className="zx">Amine</span></h4>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 ">
                <div className="btn__all">
                    <a href={t} className="primary-btn">View All <span className="arr"><i class='bx bx-right-arrow-alt'></i></span></a>
                </div>
            </div>
        </div>
        <div className="row x">
           <Card data={upanime_data['1']}/>
           <Card data={upanime_data['2']}/>
           <Card data={upanime_data['3']}/>
           <Card data={upanime_data['4']}/>
           <Card data={upanime_data['5']}/>
           <Card data={upanime_data['6']}/>
        </div>
    </div>
    )
}
export default Tua;
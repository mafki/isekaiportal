import React, { useEffect, useState } from "react";
import Next from "../Next";
import "../../compoments-css/cardmore.css"
import TimeStamp from "../../function/TimeStamp";
import { useLocation } from "react-router-dom";
import RelationsAnimeContainer from "../relations-Anime/RelationsAnimeContainer";
import ReAnime from "../relations-Anime/ReAnime";
import scrollToTop from "../../function/scrollToTop";

function CardMore({ path}) {
    const [data, setdata] = useState([
              {
                "relations": {
                  "nodes": [
                    {
                      "averageScore": 82,
                      "popularity": 59888,
                      "episodes": 1,
                      "coverImage": {
                        "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx5-NozHwXWdNLCz.jpg"
                      },
                      "isAdult": false,
                      "genres": [
                        "Action",
                        "Drama",
                        "Mystery",
                        "Sci-Fi"
                      ],
                      "title": {
                        "romaji": "Cowboy Bebop: Tengoku no Tobira"
                      }
                    },
                    {
                      "averageScore": 59,
                      "popularity": 6443,
                      "episodes": 1,
                      "coverImage": {
                        "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx17205-Dk5nmaKD7hPM.jpg"
                      },
                      "isAdult": false,
                      "genres": [
                        "Adventure"
                      ],
                      "title": {
                        "romaji": "Cowboy Bebop: Ein no Natsuyasumi"
                      }
                    },
                    {
                      "averageScore": 66,
                      "popularity": 3741,
                      "episodes": null,
                      "coverImage": {
                        "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/nx30173-SU7cu3H9jLXT.jpg"
                      },
                      "isAdult": false,
                      "genres": [
                        "Action",
                        "Adventure",
                        "Comedy",
                        "Sci-Fi"
                      ],
                      "title": {
                        "romaji": "Cowboy Bebop"
                      }
                    },
                    {
                      "averageScore": 58,
                      "popularity": 1190,
                      "episodes": null,
                      "coverImage": {
                        "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/b30174-RTbUXsQNPNwd.jpg"
                      },
                      "isAdult": false,
                      "genres": [
                        "Action",
                        "Adventure",
                        "Comedy",
                        "Sci-Fi"
                      ],
                      "title": {
                        "romaji": "Shooting Star Bebop: Cowboy Bebop"
                      }
                    },
                    {
                      "averageScore": 70,
                      "popularity": 9462,
                      "episodes": 1,
                      "coverImage": {
                        "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx4037-zpDbjycoZhNI.png"
                      },
                      "isAdult": false,
                      "genres": [
                        "Action",
                        "Adventure",
                        "Comedy",
                        "Drama",
                        "Sci-Fi"
                      ],
                      "title": {
                        "romaji": "Cowboy Bebop: Yoseatsume Blues"
                      }
                    }
                  ]
                },
                "nextAiringEpisode": null,
                "description": "Enter a world in the distant future, where Bounty Hunters roam the solar system. Spike and Jet, bounty hunting partners, set out on journeys in an ever struggling effort to win bounty rewards to survive.<br><br>\nWhile traveling, they meet up with other very interesting people. Could Faye, the beautiful and ridiculously poor gambler, Edward, the computer genius, and Ein, the engineered dog be a good addition to the group?",
                "externalLinks": [
                  {
                    "site": "Hulu",
                    "url": "http://www.hulu.com/cowboy-bebop",
                    "icon": "https://s4.anilist.co/file/anilistcdn/link/icon/7-rM06PQyWONGC.png"
                  },
                  {
                    "site": "Crunchyroll",
                    "url": "http://www.crunchyroll.com/cowboy-bebop",
                    "icon": "https://s4.anilist.co/file/anilistcdn/link/icon/5-AWN2pVlluCOO.png"
                  },
                  {
                    "site": "Funimation",
                    "url": "https://www.funimation.com/shows/cowboy-bebop/",
                    "icon": "https://s4.anilist.co/file/anilistcdn/link/icon/8-I96T2wQCpURN.png"
                  },
                  {
                    "site": "Amazon",
                    "url": "https://www.amazon.com/gp/video/detail/B00R2KO8ZE/",
                    "icon": "https://s4.anilist.co/file/anilistcdn/link/icon/21-bDoNIomehkOx.png"
                  },
                  {
                    "site": "Tubi TV",
                    "url": "https://tubitv.com/series/2052",
                    "icon": "https://s4.anilist.co/file/anilistcdn/link/icon/30-H2h0Fxnog1Pr.png"
                  },
                  {
                    "site": "Adult Swim",
                    "url": "https://www.adultswim.com/videos/cowboy-bebop",
                    "icon": "https://s4.anilist.co/file/anilistcdn/link/icon/28-W1L8AHW0O4xE.png"
                  },
                  {
                    "site": "Netflix",
                    "url": "https://www.netflix.com/title/80001305",
                    "icon": "https://s4.anilist.co/file/anilistcdn/link/icon/10-rVGPom8RCiwH.png"
                  }
                ],
                "isAdult": false,
                "title": {
                  "romaji": "Cowboy Bebop"
                },
                "genres": [
                  "Action",
                  "Adventure",
                  "Drama",
                  "Sci-Fi"
                ],
                "coverImage": {
                  "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1-CXtrrkMpJ8Zq.png"
                },
                "popularity": 321938,
                "averageScore": 86,
                "episodes": 26
              }])
              const [id, setid] = useState(null);

    const location = useLocation();
    const { state } = location;
    const handleClick = (idd) => {
      setid(idd);
      scrollToTop()
    };
    
    useEffect(() => {
      const fetchData = async () => {
          try {
              const ddd = [];
              if (id !== null) {
                console.log(id)
                  const a = await ReAnime(id);
                  console.log('amine22 - a:', a);
                  ddd.push(a.Media);
                  setid(id)
                  console.log('amine22')
                  console.log(ddd)
              } else if (state && state.postData.media) {
                  ddd.push(state.postData.media);
              } else {
                  ddd.push(state.postData);
              }
              console.log("anime ddd:");
              console.log(ddd);
              console.log("anime id:");

              console.log(id)
              setdata(ddd);
              console.log("anime data:");

              console.log(data)
              
          } catch (error) {
              console.error('Error in try data:', error);
          }
      };
  
      fetchData();
  }, [state, id]);
  
    if (data[0].description) {
        data[0].description = data[0]?.description.replaceAll("<i>", "").replaceAll("</i>", "").replaceAll("<br>", "")
    }
    if (data[0].externalLinks) {
        data[0].externalLinks = data[0]?.externalLinks.filter(link => link.icon !== null)
    }
    return (
        <>

            <div className="trending__product axax">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-8">
                        <div className="section-title">
                            <h4><span className="zx"> Anime </span></h4>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="btn__all">
                            {path ? <Next path={"/anime/up-coming-anime"} /> : <Next path={"/"} dri={"back"} />}
                        </div>
                    </div>
                </div>
                <div className="row x">
                    <div className="col-lg-4 col-md-4 col-sm-4 eae ">
                        <div className="product__item">
                            <div className="product__item__pic">
                                <img
                                    className="background-image"
                                    src={data[0].coverImage.extraLarge}
                                    alt="Background"
                                />
                                <div className="ep">{data[0].averageScore / 10 + ' / 10'}</div>
                                <div className="comment">
                                    ep
                                </div>
                                <div className="view">
                                    <i className="fa fa-eye"></i> {data[0].popularity}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="description-section">
                        <h4>{data[0].title.romaji}</h4>
                        {
                            data[0].nextAiringEpisode === (undefined ||null || NaN) ? "" : <><h5 className="zx">Next episode :</h5>{TimeStamp(data[0].nextAiringEpisode?.airingAt, "all")}</>
                        }
                        <div>
                            <h5 className="zx">Watch Now :</h5>
                            <div className="zaza">
                                <ul>
                                    {data[0].externalLinks?.map((item, index) => (
                                        <li key={index}><a href={item.url} rel="noreferrer" target="_blank" ><img src={item.icon} alt="background" />{item.site}</a></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h5 className="zx">genres :</h5>
                            <div className="product__item__text xe">
                                <ul>
                                    {data[0].genres.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h5 className="zx">description :</h5>
                            <p>{data[0].description}</p>
                        </div>
                    </div>
                </div>

            </div>
            <RelationsAnimeContainer d={data[0].relations} handleClick={handleClick} />
        </>
    );
}
CardMore.defaultProps = {
    pageon: null
}
export default CardMore;

import React, { useEffect, useState } from "react";
import Card from "./Card";
import Next from "./Next";
import image from '../images/loading.jpg'
import LaApi from '../function/LaApi'
import { useLocation } from "react-router-dom";

function La({ numberOfObjectsToMap }) {
    const [data, setData] = useState([
        {
          "media": {
            "title": {
              "romaji": "Loading"
            },
            "genres": [
              "Loading"
            ],
            "coverImage": {
              "extraLarge": image
            },
            "popularity": "Loading",
            "averageScore": null,
          },
          "episode": "Loading"
        },
        {
            "media": {
              "title": {
                "romaji": "Loading"
              },
              "genres": [
                "Loading"
              ],
              "coverImage": {
                "extraLarge": image
              },
              "popularity": "Loading",
              "averageScore": null,
            },
            "episode": "Loading"
          },
          {
            "media": {
              "title": {
                "romaji": "Loading"
              },
              "genres": [
                "Loading"
              ],
              "coverImage": {
                "extraLarge": image
              },
              "popularity": "Loading",
              "averageScore": null,
            },
            "episode": "Loading"
          },
          {
            "media": {
              "title": {
                "romaji": "Loading"
              },
              "genres": [
                "Loading"
              ],
              "coverImage": {
                "extraLarge": image
              },
              "popularity": "Loading",
              "averageScore": null,
            },
            "episode": "Loading"
          },
          {
            "media": {
              "title": {
                "romaji": "Loading"
              },
              "genres": [
                "Loading"
              ],
              "coverImage": {
                "extraLarge": image
              },
              "popularity": "Loading",
              "averageScore": null,
            },
            "episode": "Loading"
          },
          {
            "media": {
              "title": {
                "romaji": "Loading"
              },
              "genres": [
                "Loading"
              ],
              "coverImage": {
                "extraLarge": image
              },
              "popularity": "Loading",
              "averageScore": null,
            },
            "episode": "Loading"
          }
        ]);
    const [num,setnum]=useState(6)
    
    useEffect(() => {
        
      // Fetch data when the component mounts
      async function fetchData() {
        try {
          const fetchedData = await LaApi();
          if(fetchedData){
          setData(fetchedData);
          if(!numberOfObjectsToMap){
          setnum(fetchedData.length)}}
          console.log(fetchedData.length)
        } catch (error) {
          // Handle error if needed
        }
      }
      fetchData();
    },[numberOfObjectsToMap]);
    const location = useLocation();
    const path = location.pathname === "/"; 
    return (
        <div className="trending__product">
            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8">
                    <div className="section-title">
                        <h4>RECENTLY ADDED <span className="zx">anime</span></h4>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 ">
                    <div className="btn__all">
                       {path?<Next path={"/anime/recently-added-anime"} />:<Next path={"/"} dri={"back"}/>}
                    </div>
                </div>
            </div>
            <div className="row x">
            {Object.keys(data)
          .slice(0, num)
          .map((key) => (
            <Card key={key} media={data[key].media} episode={data[key].episode}  />
          ))}
            </div>
        </div>
    )
          }
export default La;
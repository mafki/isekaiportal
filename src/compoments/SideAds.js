import React from "react";
export default function SideAds() {

    return (
        <div className="popular__product">
            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8">
                    <div className="section-title">
                        <h4>Ads</h4>
                    </div>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8">
                    <iframe
                        title="Advertisement"
                        data-aa="2264813"
                        src="//ad.a-ads.com/2264813?size=250x250"
                        style={{
                            width: '250px',
                            height: '250px',
                            border: '0px',
                            padding: '0px',
                            overflow: 'hidden',
                            backgroundColor: 'transparent'
                        }}
                    />
                </div>
            </div>
        </div>

    )
}

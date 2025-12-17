import React, { useEffect } from 'react';

export default function KakaoAdFit() {
    useEffect(() => {
        // Kakao AdFit script is loaded via index.html
        // This component just renders the ad container
    }, []);

    return (
        <div className="flex justify-center my-8">
            <ins
                className="kakao_ad_area"
                style={{ display: 'none' }}
                data-ad-unit="DAN-t6nFIkFM1dBrKloC"
                data-ad-width="300"
                data-ad-height="250"
            />
        </div>
    );
}

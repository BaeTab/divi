import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords }) {
    const siteTitle = "Dividend Planner";
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const metaDescription = description || "매달 들어오는 배당금을 한눈에 관리하세요. 쉽고 간편한 배당금 포트폴리오 매니저.";
    const metaKeywords = keywords || "배당금, 주식, 포트폴리오, 월배당, 재테크, 파이어족";

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />

            {/* Twitter */}
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={metaDescription} />
        </Helmet>
    );
}

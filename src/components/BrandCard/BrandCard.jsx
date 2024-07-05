import PropTypes from 'prop-types';
import './BrandGrid.css'


// const BrandCard = ({ logoSrc, brandName, brandLink }) => (
//     <div className="brand-card">
//         <a href={brandLink} className="brand-link">
//             <img loading="lazy" src={logoSrc} alt={`${brandName} logo`} className="brand-logo" />
//         </a>
//         <a href={brandLink} className="brand-link">
//             <span className="brand-name">{brandName}</span>
//         </a>
//     </div>
// );

// BrandCard.propTypes = {
//     logoSrc: PropTypes.string.isRequired,
//     brandName: PropTypes.string.isRequired,
//     brandLink: PropTypes.string.isRequired
// };

// const BrandColumn = ({ brands }) => (
//     <div className="brand-column">
//         {brands.map((brand, index) => (
//             <BrandCard key={index} logoSrc={brand.logoSrc} brandName={brand.name} brandLink={brand.link} />
//         ))}
//     </div>
// );

// BrandColumn.propTypes = {
//     brands: PropTypes.arrayOf(
//         PropTypes.shape({
//             logoSrc: PropTypes.string.isRequired,
//             name: PropTypes.string.isRequired,
//             link: PropTypes.string.isRequired
//         })
//     ).isRequired
// };
const BrandCard = ({ logoSrc, brandName, brandLink }) => (
    <div className="brand-card">
        {brandLink ? (
            <a href={brandLink} className="brand-link">
                <img loading="lazy" src={logoSrc} alt={`${brandName} logo`} className="brand-logo" />
            </a>
        ) : (
            <img loading="lazy" src={logoSrc} alt={`${brandName} logo`} className="brand-logo" />
        )}
        {brandLink ? (
            <a href={brandLink} className="brand-link">
                <span className="brand-name">{brandName}</span>
            </a>
        ) : (
            <span className="brand-name">{brandName}</span>
        )}
    </div>
);

BrandCard.propTypes = {
    logoSrc: PropTypes.string.isRequired,
    brandName: PropTypes.string.isRequired,
    brandLink: PropTypes.string
};

const BrandColumn = ({ brands }) => (
    <div className="brand-column">
        {brands.map((brand, index) => (
            <BrandCard key={index} logoSrc={brand.logoSrc} brandName={brand.name} brandLink={brand.link} />
        ))}
    </div>
);

BrandColumn.propTypes = {
    brands: PropTypes.arrayOf(
        PropTypes.shape({
            logoSrc: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            link: PropTypes.string
        })
    ).isRequired
};
function BrandGrid() {
    const brandData = [
        [
            { logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2562cc45e5d85010c3a25ab6f2eb6f2595d036f98f83b0c6b80f0db943a67798?apiKey=cc5bec9b519e49cc969df3e32a6ea878&", name: "HONDA", link: "/nissan" },
            { logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7ec9e60881d2cf7e41d79883cd93d2913ad2abe55553eb92b6c137b60f116a0c?apiKey=cc5bec9b519e49cc969df3e32a6ea878&", name: "NISSAN", link: "/nissan" },
            { logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9cf0bbb64c75a5b76eced21b6781de505263c63bf388a2926a48fa6bd48e522e?apiKey=cc5bec9b519e49cc969df3e32a6ea878&", name: "CHANGAN", link: "/nissan" },
            { logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3b57590e3b24cdb7fde10fd256f7d2885cf3351d14d38266318cf9f88a6e4181?apiKey=cc5bec9b519e49cc969df3e32a6ea878&", name: "TANK", link: "/nissan" },
            { logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/195afb2142d646d6e02de649802d5860f8527c3652f609e122a3d4396fb4712e?apiKey=cc5bec9b519e49cc969df3e32a6ea878&", name: "JETOUR", link: "/nissan" },
        ],
        [
            { logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3b21264d7205dd6174c6d0f95a12e3639d00c07ff464395da809fe7ee02b4c96?apiKey=cc5bec9b519e49cc969df3e32a6ea878&", name: "GAC" },
            { logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0cf338e7a66a5c7178d870c20c5e922c8d0bcdb1d50b411a973a44a76593b8e4?apiKey=cc5bec9b519e49cc969df3e32a6ea878&", name: "GEELY" },
            { logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e1192430b7abda47dd230facb4feb4c315e1148d2d0a07b52ee7e065b94d4768?apiKey=cc5bec9b519e49cc969df3e32a6ea878&", name: "FAW" },
            { logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/270dc06f7705181c59a8062278db2d9bea3e053d9d95b263469d7609b4f937b1?apiKey=cc5bec9b519e49cc969df3e32a6ea878&", name: "EXEED" },
            { logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c00193fdbf49cf008ba338d6daf78e7df1dba1a38375579d3d3052d9a026c0a?apiKey=cc5bec9b519e49cc969df3e32a6ea878&", name: "OPEL" }

        ],
        [
            { logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/af69a7af25ac06f85a7a85d960e6cf5a04399cc5e2c86576201166e23ef5a115?apiKey=cc5bec9b519e49cc969df3e32a6ea878&", name: "CHERY", link: "/nissan" },
            { logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/195f7c2034fb7977884c60a22b12ca9ea80b8b531acf9d6f32b956f5af76efcc?apiKey=cc5bec9b519e49cc969df3e32a6ea878&", name: "HYUNDAI", link: "/nissan" },
            { logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/11a3a0fe9c159ead857bac7da8acbb0e6878ca90e97ca65fb489b81e73e3af6a?apiKey=cc5bec9b519e49cc969df3e32a6ea878&", name: "LADA", link: "/nissan" },
            { logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/03899aa14c13a2f420c5ce62401c5b00410e26609597017e18aa1167c548f318?apiKey=cc5bec9b519e49cc969df3e32a6ea878&", name: "JAC", link: "/nissan" },
            { logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9a76840eae6d28193e55360617d00adb732ec7becb4fdf171bc7bd24359e27d7?apiKey=cc5bec9b519e49cc969df3e32a6ea878&", name: "RENAULT", link: "/nissan" }
        ],
        [
            { logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4ee1799c3743df23b9eb9270aaa8b2dea891efbdf9f60a3d47e62c73c4f6a5e4?apiKey=cc5bec9b519e49cc969df3e32a6ea878&", name: "MAZDA", link: "/nissan" },
            { logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/bcb086b1aa58d59eea85c7b5adbd0b506c581acca55b335e472bd569778aaead?apiKey=cc5bec9b519e49cc969df3e32a6ea878&", name: "MITSUBISHI", link: "/nissan" },
            { logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7035247da790411f8ba9af58ba1e749d99dee7351b0fe8e2712fd385357fac42?apiKey=cc5bec9b519e49cc969df3e32a6ea878&", name: "VOLKSWAGEN", link: "/nissan" },
            { logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/160acbf5e0559eac97ef8ad2c9d57aa723371a9cee40f9832d959c004f2aef0d?apiKey=cc5bec9b519e49cc969df3e32a6ea878&", name: "TOYOTA", link: "/nissan" },
            { logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/54284fb0aa4517be8a0e0fcb0ddd0665aca1f366846c1d146b2c57b677d74ed1?apiKey=cc5bec9b519e49cc969df3e32a6ea878&", name: "HAVAL", link: "/nissan" }
        ],
        [
            { logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/418c85d348f0c0c00426c563e7b03e7fafe768528a2690ebb52502f4701e64bf?apiKey=cc5bec9b519e49cc969df3e32a6ea878&", name: "CITROEN", link: "/nissan" },
            { logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a776da967102dac352bc05f99567d2a597f95bb92e358d4a327689e3a1981a7b?apiKey=cc5bec9b519e49cc969df3e32a6ea878&", name: "OMODA", link: "/nissan" },
            { logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c311d440cbb29177cd6237556c092baa19263ff45bc5b462cedc84a3165161a?apiKey=cc5bec9b519e49cc969df3e32a6ea878&", name: "DONGFENG", link: "/nissan" },
            { logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/060165b75b98e84056c982043924b76869911806a2dcc919820e7bdd0edab612?apiKey=cc5bec9b519e49cc969df3e32a6ea878&", name: "SKODA", link: "/nissan" },
            { logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/54ba2a0587103bfa13f16efeb5c2b32b8674f8c30a9635bee8fc40ffcb23d47c?apiKey=cc5bec9b519e49cc969df3e32a6ea878&", name: "UAZ", link: "/nissan" }
        ]
    ];

    return (
        <section className="brand-grid-container">
            <section className="brand-grid">
                {brandData.map((column, index) => (
                    <BrandColumn key={index} brands={column} />
                ))}
            </section>
        </section>
    );
}

export default BrandGrid;
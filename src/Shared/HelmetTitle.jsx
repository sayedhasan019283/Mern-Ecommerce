import {Helmet} from "react-helmet";

// eslint-disable-next-line react/prop-types
const HelmetTitle = ({Title}) => {
    return (
        <div className="application">
        <Helmet>
            <meta charSet="utf-8" />
            <title>{Title}</title>
        </Helmet>
    </div>

    );
};

export default HelmetTitle;
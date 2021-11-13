import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import CatalogBanner from '../CatalogBanner/CatalogBanner';
import CatalogWatches from '../CatalogWatches/CatalogWatches';

const Catalog = () => {
    return (
        <div>
            <Navigation />
            <CatalogBanner></CatalogBanner>
            <CatalogWatches></CatalogWatches>
        </div>
    );
};

export default Catalog;
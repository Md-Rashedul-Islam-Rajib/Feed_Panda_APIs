'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">feed_panda_apis documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                                <li class="link">
                                    <a href="overview.html" data-type="chapter-link">
                                        <span class="icon ion-ios-keypad"></span>Overview
                                    </a>
                                </li>

                            <li class="link">
                                <a href="index.html" data-type="chapter-link">
                                    <span class="icon ion-ios-paper"></span>
                                        README
                                </a>
                            </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>

                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-deaca4f5c1fd61bba54c2245f6523b22241167eadef43be2bd30832a4b157cdf8c72fc27d2318fb725513ff9150c0c2e8e7cc2fe332e84b7551a83edaa39c69f"' : 'data-bs-target="#xs-controllers-links-module-AppModule-deaca4f5c1fd61bba54c2245f6523b22241167eadef43be2bd30832a4b157cdf8c72fc27d2318fb725513ff9150c0c2e8e7cc2fe332e84b7551a83edaa39c69f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-deaca4f5c1fd61bba54c2245f6523b22241167eadef43be2bd30832a4b157cdf8c72fc27d2318fb725513ff9150c0c2e8e7cc2fe332e84b7551a83edaa39c69f"' :
                                            'id="xs-controllers-links-module-AppModule-deaca4f5c1fd61bba54c2245f6523b22241167eadef43be2bd30832a4b157cdf8c72fc27d2318fb725513ff9150c0c2e8e7cc2fe332e84b7551a83edaa39c69f"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-deaca4f5c1fd61bba54c2245f6523b22241167eadef43be2bd30832a4b157cdf8c72fc27d2318fb725513ff9150c0c2e8e7cc2fe332e84b7551a83edaa39c69f"' : 'data-bs-target="#xs-injectables-links-module-AppModule-deaca4f5c1fd61bba54c2245f6523b22241167eadef43be2bd30832a4b157cdf8c72fc27d2318fb725513ff9150c0c2e8e7cc2fe332e84b7551a83edaa39c69f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-deaca4f5c1fd61bba54c2245f6523b22241167eadef43be2bd30832a4b157cdf8c72fc27d2318fb725513ff9150c0c2e8e7cc2fe332e84b7551a83edaa39c69f"' :
                                        'id="xs-injectables-links-module-AppModule-deaca4f5c1fd61bba54c2245f6523b22241167eadef43be2bd30832a4b157cdf8c72fc27d2318fb725513ff9150c0c2e8e7cc2fe332e84b7551a83edaa39c69f"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PaginationHelper.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaginationHelper</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoriesModule.html" data-type="entity-link" >CategoriesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CategoriesModule-96c1bb434571fc52987d95fd535848fd42aeaf38873c1bddb3d65d3785638375c93520b6fde0b3caa3cae9b4bd764019dcafb2558c86477d47b546233807e95c"' : 'data-bs-target="#xs-controllers-links-module-CategoriesModule-96c1bb434571fc52987d95fd535848fd42aeaf38873c1bddb3d65d3785638375c93520b6fde0b3caa3cae9b4bd764019dcafb2558c86477d47b546233807e95c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoriesModule-96c1bb434571fc52987d95fd535848fd42aeaf38873c1bddb3d65d3785638375c93520b6fde0b3caa3cae9b4bd764019dcafb2558c86477d47b546233807e95c"' :
                                            'id="xs-controllers-links-module-CategoriesModule-96c1bb434571fc52987d95fd535848fd42aeaf38873c1bddb3d65d3785638375c93520b6fde0b3caa3cae9b4bd764019dcafb2558c86477d47b546233807e95c"' }>
                                            <li class="link">
                                                <a href="controllers/CategoriesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CategoriesModule-96c1bb434571fc52987d95fd535848fd42aeaf38873c1bddb3d65d3785638375c93520b6fde0b3caa3cae9b4bd764019dcafb2558c86477d47b546233807e95c"' : 'data-bs-target="#xs-injectables-links-module-CategoriesModule-96c1bb434571fc52987d95fd535848fd42aeaf38873c1bddb3d65d3785638375c93520b6fde0b3caa3cae9b4bd764019dcafb2558c86477d47b546233807e95c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoriesModule-96c1bb434571fc52987d95fd535848fd42aeaf38873c1bddb3d65d3785638375c93520b6fde0b3caa3cae9b4bd764019dcafb2558c86477d47b546233807e95c"' :
                                        'id="xs-injectables-links-module-CategoriesModule-96c1bb434571fc52987d95fd535848fd42aeaf38873c1bddb3d65d3785638375c93520b6fde0b3caa3cae9b4bd764019dcafb2558c86477d47b546233807e95c"' }>
                                        <li class="link">
                                            <a href="injectables/CategoriesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FindAllCategoryProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FindAllCategoryProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GenerateSlug.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenerateSlug</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PaginationHelper.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaginationHelper</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-55ac9b2e837581e090672299a861afdfdbd5e89ee09d62b891db3e4e082af7bd05fd8f61b3b587d511710779cad5c8ac9968c131779bdec4d6d414297ea223b2"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-55ac9b2e837581e090672299a861afdfdbd5e89ee09d62b891db3e4e082af7bd05fd8f61b3b587d511710779cad5c8ac9968c131779bdec4d6d414297ea223b2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-55ac9b2e837581e090672299a861afdfdbd5e89ee09d62b891db3e4e082af7bd05fd8f61b3b587d511710779cad5c8ac9968c131779bdec4d6d414297ea223b2"' :
                                        'id="xs-injectables-links-module-PrismaModule-55ac9b2e837581e090672299a861afdfdbd5e89ee09d62b891db3e4e082af7bd05fd8f61b3b587d511710779cad5c8ac9968c131779bdec4d6d414297ea223b2"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsModule.html" data-type="entity-link" >ProductsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProductsModule-7f6f50d193bc63220c49fb0e58f76b2160036087f800372e556f1b1f7c9aee5ba2e592f163a10281a19134b185fe27b390e318ebd4505062563951d2e0b42b5c"' : 'data-bs-target="#xs-controllers-links-module-ProductsModule-7f6f50d193bc63220c49fb0e58f76b2160036087f800372e556f1b1f7c9aee5ba2e592f163a10281a19134b185fe27b390e318ebd4505062563951d2e0b42b5c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductsModule-7f6f50d193bc63220c49fb0e58f76b2160036087f800372e556f1b1f7c9aee5ba2e592f163a10281a19134b185fe27b390e318ebd4505062563951d2e0b42b5c"' :
                                            'id="xs-controllers-links-module-ProductsModule-7f6f50d193bc63220c49fb0e58f76b2160036087f800372e556f1b1f7c9aee5ba2e592f163a10281a19134b185fe27b390e318ebd4505062563951d2e0b42b5c"' }>
                                            <li class="link">
                                                <a href="controllers/ProductsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProductsModule-7f6f50d193bc63220c49fb0e58f76b2160036087f800372e556f1b1f7c9aee5ba2e592f163a10281a19134b185fe27b390e318ebd4505062563951d2e0b42b5c"' : 'data-bs-target="#xs-injectables-links-module-ProductsModule-7f6f50d193bc63220c49fb0e58f76b2160036087f800372e556f1b1f7c9aee5ba2e592f163a10281a19134b185fe27b390e318ebd4505062563951d2e0b42b5c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductsModule-7f6f50d193bc63220c49fb0e58f76b2160036087f800372e556f1b1f7c9aee5ba2e592f163a10281a19134b185fe27b390e318ebd4505062563951d2e0b42b5c"' :
                                        'id="xs-injectables-links-module-ProductsModule-7f6f50d193bc63220c49fb0e58f76b2160036087f800372e556f1b1f7c9aee5ba2e592f163a10281a19134b185fe27b390e318ebd4505062563951d2e0b42b5c"' }>
                                        <li class="link">
                                            <a href="injectables/FindAllProductsProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FindAllProductsProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GenerateSlug.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenerateSlug</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PaginationHelper.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaginationHelper</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProductsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CategoriesController.html" data-type="entity-link" >CategoriesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProductsController.html" data-type="entity-link" >ProductsController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CategoryQueryDto.html" data-type="entity-link" >CategoryQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCategoryDto.html" data-type="entity-link" >CreateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductDto.html" data-type="entity-link" >CreateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginatedResponseDto.html" data-type="entity-link" >PaginatedResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginationDto.html" data-type="entity-link" >PaginationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductQueryDto.html" data-type="entity-link" >ProductQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCategoryDto.html" data-type="entity-link" >UpdateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProductDto.html" data-type="entity-link" >UpdateProductDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoriesService.html" data-type="entity-link" >CategoriesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FindAllCategoryProvider.html" data-type="entity-link" >FindAllCategoryProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FindAllProductsProvider.html" data-type="entity-link" >FindAllProductsProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GenerateSlug.html" data-type="entity-link" >GenerateSlug</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaginationHelper.html" data-type="entity-link" >PaginationHelper</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductsService.html" data-type="entity-link" >ProductsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
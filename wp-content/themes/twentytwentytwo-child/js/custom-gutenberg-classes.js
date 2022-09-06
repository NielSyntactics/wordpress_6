wp.domReady( () => {
    /*for List Block*/
    wp.blocks.registerBlockStyle( 'core/list', {
        name: 'checklist',
        label: 'Checklist',
        isDefault: false,
    } );
    /*wp.blocks.registerBlockStyle( 'core/list', {
        name: 'orderlist',
        label: 'Orderlist',
        isDefault: false,
    } );*/
    wp.blocks.registerBlockStyle( 'core/spacer', {
        name: 'global-spacer',
        label: 'Global Spacer',
        isDefault: false,
    } );
    wp.blocks.registerBlockStyle( 'core/spacer', {
        name: 'cta-spacer',
        label: 'CTA Spacer',
        isDefault: false,
    } );
    wp.blocks.registerBlockStyle( 'core/spacer', {
        name: 'banner-spacer',
        label: 'Banner Spacer',
        isDefault: false,
    } );
    wp.blocks.registerBlockStyle( 'core/spacer', {
        name: 'page-title-spacer',
        label: 'Page Title Spacer',
        isDefault: false,
    } );
    wp.blocks.registerBlockStyle( 'core/media-text', {
        name: 'bordered',
        label: 'Bordered',
        isDefault: false,
    } );
    wp.blocks.registerBlockStyle( 'core/button', {
        name: 'fill-light',
        label: 'Fill Light Hover',
        isDefault: false,
    } );
    wp.blocks.registerBlockStyle( 'core/button', {
        name: 'outline-light',
        label: 'Outline Light Hover',
        isDefault: false,
    } );
    wp.blocks.registerBlockStyle( 'core/cover', {
        name: 'banner',
        label: 'Banner',
        isDefault: false,
    } );
    wp.blocks.registerBlockStyle( 'core/cover', {
        name: 'page-title',
        label: 'Page Title',
        isDefault: false,
    } );
} );
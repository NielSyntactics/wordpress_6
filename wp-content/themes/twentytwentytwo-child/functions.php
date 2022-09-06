<?php
/**
 * Twenty Twenty-Two functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_Two
 * @since Twenty Twenty-Two 1.0
 */
add_action( 'after_setup_theme', 'twentytwentytwo_support', 9999 );
if ( ! function_exists( 'twentytwentytwo_support' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * @since Twenty Twenty-Two 1.0
	 *
	 * @return void
	 */
	function twentytwentytwo_support() {
		// Add support for block styles.
		add_theme_support( 'wp-block-styles' );
		// Enqueue editor styles.
		add_editor_style( 'style.css' );
		add_editor_style( 'style-single.css' );
	}
endif;


add_action( 'enqueue_block_editor_assets', 'custom_gutenberg_scripts' );
function custom_gutenberg_scripts() {
    wp_enqueue_script( 'custom-gutenberg-classes', get_stylesheet_directory_uri() . '/js/custom-gutenberg-classes' . '.js', array(), wp_get_theme()->get( 'Version' ), true );
}


if ( ! function_exists( 'twentytwentytwo_styles' ) ) :
	/**
	 * Enqueue styles.
	 *
	 * @since Twenty Twenty-Two 1.0
	 *
	 * @return void
	 */
	function twentytwentytwo_styles() {
		// Register theme stylesheet.
		$theme_version = wp_get_theme()->get( 'Version' );
		$version_string = is_string( $theme_version ) ? $theme_version : false;
		wp_register_style(
			'twentytwentytwo-style',
			get_template_directory_uri() . '/style.css',
			array(),
			$version_string
		);
		wp_enqueue_style( 'twentytwentytwo-style' );
        
        if(is_single()) {
            wp_register_style(
                'twentytwentytwo-style-single',
                get_template_directory_uri() . '/style-single.css',
                array(),
                $version_string
            );
            wp_enqueue_style( 'twentytwentytwo-style-single' );
        }
	}

endif;
add_action( 'wp_enqueue_scripts', 'twentytwentytwo_styles' );
// Add block patterns
require get_template_directory() . '/inc/block-patterns.php';


// Auto Image Alt Text Upload
add_action( 'add_attachment', 'auto_alt_image_upon_image_upload' );
function auto_alt_image_upon_image_upload( $post_ID ) {
	// Check if uploaded file is an image, else do nothing
	if ( wp_attachment_is_image( $post_ID ) ) {
		$my_image_title = get_post( $post_ID )->post_title;
		// Sanitize the title:  remove hyphens, underscores & extra spaces:
		$my_image_title = preg_replace( '%\s*[-_\s]+\s*%', ' ',  $my_image_title );
		// Sanitize the title: set letters lower case: strtolower($my_image_title) or Cap ucwords($my_image_title)
		$my_image_title =  $my_image_title;
		// Create an array with the image meta (Title, Caption, Description) to be updated
		// Note:  comment out the Excerpt/Caption or Content/Description lines if not needed
		$my_image_meta = array(
			'ID'		=> $post_ID, // Specify the image (ID) to be updated
		);
		// Set the image Alt-Text
		update_post_meta( $post_ID, '_wp_attachment_image_alt', $my_image_title );
		// Set the image meta (e.g. Title, Excerpt, Content)
		wp_update_post( $my_image_meta );
	} 
}
// Auto Image Filename Lowercase Upload
add_filter('sanitize_file_name', 'auto_lowercase_filename_image_upon_image_upload', 10);
function auto_lowercase_filename_image_upon_image_upload($fileName) {
    $i = strrpos($fileName, '.');
    return strtolower($fileName);
}
//get attachment meta
if ( !function_exists('get_image_alt') ) {
    function get_image_alt($image_id) {
        $img_alt = get_post_meta( get_post_thumbnail_id($image_id), '_wp_attachment_image_alt', true );
        $img_title = get_the_title(get_post_thumbnail_id($image_id));
        if ($img_alt == '') { 
            $img_alt = get_post_meta( $image_id, '_wp_attachment_image_alt', true );
            $img_title = get_the_title($image_id);
        }
        return $img_alt ? $img_alt : $img_title;
    }
}

/*Google Font*/
add_action('wp_head', 'theme_fonts');
function theme_fonts() { ?>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin/>
<?php }

register_nav_menus(
    array(
    'primary-menu' => __( 'Primary Menu' ),
    )
);


add_action( 'wp_enqueue_scripts', 'child_enqueue_scripts_styles' );
function child_enqueue_scripts_styles() {
    wp_enqueue_style( 'google-font',  'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap', array(), '');
    wp_enqueue_style( 'font-awesome-6',  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css', array(), '');
    wp_enqueue_script('swiper',  'https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.4.5/js/swiper.min.js', array(), '5.4.5');
    wp_enqueue_style( 'swiper',  'https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.4.5/css/swiper.min.css', array(), '5.4.5');
    wp_enqueue_script( 'child-theme-custom', get_stylesheet_directory_uri() . '/js/custom' . '.js', [ 'jquery' ], wp_get_theme()->get( 'Version' ), true );
}

add_action('admin_enqueue_scripts', 'admin_child_style', 98);
function admin_child_style() {
	/*Admin*/
	wp_enqueue_style( 'admin-style', get_stylesheet_directory_uri() . '/style-admin.css' ); 
}

//remove_filter( 'render_block', 'wp_render_layout_support_flag', 10, 2 );
//remove_filter( 'render_block', 'gutenberg_render_layout_support_flag', 10, 2 );
//remove_filter( 'render_block', 'wp_render_elements_support', 10, 2 );
//remove_filter( 'render_block', 'gutenberg_render_elements_support', 10, 2 );
//add_action( 'wp_enqueue_scripts', 'prefix_remove_global_styles', 100 );
function prefix_remove_global_styles() {
	wp_dequeue_style( 'global-styles' );
} 


// Shortcode [year]
add_shortcode('year', 'year_shortcode');
function year_shortcode($atts) {
  return date("Y");
}
// Shortcode [sitename]
add_shortcode('sitename', 'sitename_shortcode');
function sitename_shortcode($atts) {
  return get_bloginfo('name');
}
// Shortcode [sitedesc]
add_shortcode('sitedesc', 'sitedesc_shortcode');
function sitedesc_shortcode($atts) {
    if (get_bloginfo('description')) return ' '.get_bloginfo('description');
}


add_filter('excerpt_length', 'custom_excerpt_length', 999);
    function custom_excerpt_length($length) {
    return 15;
}
add_filter('excerpt_more', 'wpdocs_excerpt_more');
function wpdocs_excerpt_more() {
    return '...';
}
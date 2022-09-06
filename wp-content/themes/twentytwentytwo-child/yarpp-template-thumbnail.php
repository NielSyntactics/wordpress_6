<?php
/*
YARPP Template: Thumbnails
Description: This template returns the related posts as thumbnails in an ordered list. Requires a theme which supports post thumbnails.
Author: YARPP Team
*/
?>

<?php
/*
Templating in YARPP enables developers to uber-customize their YARPP display using PHP and template tags.

The tags we use in YARPP templates are the same as the template tags used in any WordPress template. In fact, any WordPress template tag will work in the YARPP Loop. You can use these template tags to display the excerpt, the post date, the comment count, or even some custom metadata. In addition, template tags from other plugins will also work.

If you've ever had to tweak or build a WordPress theme before, you’ll immediately feel at home.

// Special template tags which only work within a YARPP Loop:

1. the_score()		// this will print the YARPP match score of that particular related post
2. get_the_score()		// or return the YARPP match score of that particular related post

Notes:
1. If you would like Pinterest not to save an image, add `data-pin-nopin="true"` to the img tag.

*/
?>

<?php
/* Pick Thumbnail */
global $_wp_additional_image_sizes;
if ( isset( $_wp_additional_image_sizes['yarpp-thumbnail'] ) ) {
	$dimensions['size'] = 'medium';
} else {
	$dimensions['size'] = 'medium'; // default
}
?>
<div class="related-post">
    <h3><?php esc_html_e('You May Also Like:'); ?></h3>
    <?php if ( have_posts() ) : ?>
        <ul class="is-flex-container columns-3 wp-block-post-template">
            <?php while ( have_posts() ) : the_post(); ?>
                <li class="wp-block-post post type-post status-publish format-standard has-post-thumbnail hentry">
                    <div class="wp-block-group post-inner">
                        <?php if ( has_post_thumbnail() ) : ?>
                            <figure class="wp-block-post-featured-image"><a href="<?php the_permalink(); ?>"><?php the_post_thumbnail( $dimensions['size'], array( 'data-pin-nopin' => 'true' ) ); ?></a></figure>
                        <?php endif; ?>
                        <div class="wp-block-post-date has-small-font-size"><time datetime="<?php echo get_the_date('c'); ?>"><a href="<?php the_permalink(); ?>"><?php echo get_the_date(); ?></a></time></div>
                        <div class="wp-block-group wp-block-post-content">
                            <h2 class="wp-block-post-title has-x-large-font-size">
                                <a href="<?php the_permalink(); ?>" target="_self" rel=""><?php the_title(); ?></a>
                            </h2>
                            <div class="wp-block-post-excerpt">
                                <p class="wp-block-post-excerpt__excerpt"><?php the_excerpt(); ?></p>
                                <p class="wp-block-post-excerpt__more-text"><a class="wp-block-post-excerpt__more-link" href="<?php the_permalink(); ?>">Read More</a></p>
                            </div>
                        </div>
                    </div>
                </li>
            <?php endwhile; ?>
        </ul>
    <?php else : ?>
        <p><?php esc_html_e('No related post.'); ?></p>
    <?php endif; ?>
</div>


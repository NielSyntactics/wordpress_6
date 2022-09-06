<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'twentytwentytwo' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '!fBN>/f@H1lv^0l#vG:KZk6`/xi11Zg,i9y|CnbJ9/1zQfl2K4V!b$`B~@bA~qkQ' );
define( 'SECURE_AUTH_KEY',  'w&`(^;>aPIaMP,m`lqJ>:PQskkUbmGQ-w~S&;A(wRDEwq#Yfq`R; XVdZf=RYbm|' );
define( 'LOGGED_IN_KEY',    'C~E3Q]ewo)c3`A.h~}wbfUliFaGlNos[)ZF7G:6.b.5rcdLItyX]1t XEk-[`Dik' );
define( 'NONCE_KEY',        '6$G1%m^<yu|ZX?|FT5&Z<b!:Sr>m?NBF{:<D,[v{z6..YB9|lbpMH0a5i(Ex+jmi' );
define( 'AUTH_SALT',        '-X^G3<zT5B@=g|?tU2)0MidG8|w*&V~v2! HDKmxcNNXd|ANggx#=Xas~Ao7o>0j' );
define( 'SECURE_AUTH_SALT', 'fq7+OX^?zf.ZcWT?$m;z&pD}(<1O$E7W/]Yfs6q_XC<5rRpVZWkh7cl5Nr)sP/MJ' );
define( 'LOGGED_IN_SALT',   'M ~2SWKv<(d=~)Bo/>&*3 RE.Vi;CI-X|Z4#03<i<cXH]72W :SZR|Idr P[8bZI' );
define( 'NONCE_SALT',       '>3/:YGIiHXL;Y@Y/7ZNM+T,mo|4sR<vG8-33FPFP`n79sR|$v9OAdHj*HT=zsXS@' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

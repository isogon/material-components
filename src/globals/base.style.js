import { injectGlobal } from 'styled-components';

export default injectGlobal`

body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

body.fontLoaded {
  font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}


html {
  width: 100%;
  height: 100%;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
}

/*
* Make body take up the entire screen
* Remove body margin so layout containers don't cause extra overflow.
*/
body {
  width: 100%;
  min-height: 100%;
  margin: 0;
}

/*
 * Main display reset for IE support.
 * Source: http://weblog.west-wind.com/posts/2015/Jan/12/main-HTML5-Tag-not-working-in-Internet-Explorer-91011
 */
main {
  display: block;
}

/*
* Apply no display to elements with the hidden attribute.
* IE 9 and 10 support.
*/
*[hidden] {
  display: none !important;
}

`;
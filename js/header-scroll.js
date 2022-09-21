const header                = document.querySelector( '#header' );
const siteHeader            = document.querySelector( '#site-header' );
let lastScrollDistance      = 0;

siteHeader.style.marginTop  = `${header.offsetHeight}px`;

window.addEventListener( 'scroll', () => {
    let     scrollDistance = window.scrollY;

    if ( scrollDistance > lastScrollDistance )
    {
        header.classList.remove( 'anim-show' );
        header.classList.add( 'anim-hide' );
    }
    else
    {
        header.classList.remove( 'anim-hide' );
        header.classList.add( 'anim-show' );
    }

    lastScrollDistance = scrollDistance;
});
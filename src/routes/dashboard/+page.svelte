<script>
    import {BottomNav, BottomNavItem, Skeleton, ImagePlaceholder} from 'flowbite-svelte';
    import {HomeSolid, CogSolid,UserCircleSolid, BookSolid, GiftBoxSolid, BellActiveAltOutline, } from 'flowbite-svelte-icons';
    import {page} from '$app/stores';
    import "../../app.css";
    $: activeUrl = $page.url.pathname;
</script>

<BottomNav {activeUrl} position="absolute" classInner="grid-cols-6">

    <BottomNavItem btnName="Dashboard" href="/">
        <HomeSolid/>
    </BottomNavItem>

    <BottomNavItem btnName="Réservations" href="/">
        <BellActiveAltOutline/>
    </BottomNavItem>

    <BottomNavItem btnName="Clients" href="/">
        <UserCircleSolid/>
    </BottomNavItem>

    <BottomNavItem btnName="Catalogue" href="/">
        <BookSolid/>
    </BottomNavItem>

  <BottomNavItem btnName="Expérience" href="/">
        <GiftBoxSolid/>
    </BottomNavItem>

    <BottomNavItem btnName="Atelier">
        <CogSolid/>
    </BottomNavItem>

</BottomNav>
<script>
  import { BottomNav, BottomNavItem, Skeleton, ImagePlaceholder } from 'flowbite-svelte';
  import { HomeSolid, WalletSolid, AdjustmentsVerticalOutline, UserCircleSolid } from 'flowbite-svelte-icons';
  import { page } from '$app/stores';
  import "../app.css";
  $: activeUrl = $page.url.pathname;
</script>

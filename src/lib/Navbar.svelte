<script>
    import "../app.css";
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    </script>
<Navbar  >
    <NavBrand href="/">
      <img src="favicon.png" class="me-3 h-6 sm:h-9" alt="KANSTOCK LOGO" />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">KANSTOCK</span>
    </NavBrand>
    <NavHamburger />
    <NavUl >
      <NavLi href="/">Home</NavLi>
      <NavLi href="/about-us">About-Us</NavLi>
      <NavLi href="/contact-us">Contact-Us</NavLi>
    </NavUl>
</Navbar>
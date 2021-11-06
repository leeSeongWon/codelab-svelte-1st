<script>
    import { Link, link } from 'svelte-routing';
</script>

<header class="container flex justify-between">
    <a href="/" class="btn btn-link text-black text-2xl font-bold no-underline" use:link>
        Caffe
    </a>
    <nav>
        <Link class="btn btn-link" to="/">홈</Link>
        <Link class="btn btn-link" to="/about">서비스 소개</Link>
        <Link class="btn btn-link" to="/order">메뉴판</Link>
        <Link class="btn btn-link" to="/sign-in">로그인</Link>
    </nav>
</header>

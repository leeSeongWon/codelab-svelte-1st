<script>
    import { DateTime } from 'luxon';
    export let article = {};
    export let url = '';
</script>

<svelte:head>
    <title>{article.subject} - Vinyl Pub</title>

    <meta property="og:title" content="{article.subject} - Vinyl Pub" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{url}" />
    <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
</svelte:head>

<h1>제목 : {article.subject}</h1>
<div class="flex flex-row justify-end">
    <div class="flex flex-col text-xs">
        <div>작성자 : { article.user_id }</div>
        <div>작성일 : { DateTime.fromISO( article.created_at ).toFormat( 'yyyy.LL.dd' ) }</div>
    </div>
</div>
<hr class="my-4">
<p>{ article.content }</p>
<hr class="my-4">
<button class="btn btn-outline-secondary btn-sm">이전</button>

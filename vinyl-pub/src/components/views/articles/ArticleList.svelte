<script>
    import { token } from '../../../stores';
    import { get } from 'svelte/store';
    import { DateTime } from 'luxon';

    export let title = '게시물 목록';
    export let category;
    export let articles = [];
</script>

<h1 class="text-xl mb-2">{title}</h1>

<table class="table">
    <thead>
    <tr>
        <th>번호</th>
        <th>제목</th>
        <th>작성자</th>
        <th>작성일</th>
    </tr>
    </thead>
    <tbody>
    {#each articles as article}
    <tr>
        <td>{article.id}</td>
        <td>
            <a href="/{category}/{article.id}">{article.subject}</a>
        </td>
        <td>{article.user_id}</td>
        <td>{DateTime.fromISO(article.created_at).toFormat('yyyy.LL.dd')}</td>
    </tr>
    {/each}
    </tbody>
</table>

<div class="flex flex-row w-full justify-end mt-4">
    {#if get(token) !== null}
        <a href="/{category}/create" class="btn btn-outline-primary">새 글 작성</a>
    {:else}
        <a href="/sign-in" class="btn btn-outline-primary">로그인</a>
    {/if}
</div>

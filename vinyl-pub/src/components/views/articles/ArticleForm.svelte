<script>
    import { token } from '../../../stores';
    import { get } from 'svelte/store';
    import { goto } from '@sapper/app';

    let bearerToken = get( token );
    let subject = '';
    let content = '';

    export let category = '';

    let submit = event => {
        event.preventDefault();

        fetch( 'http://127.0.0.1:3333/articles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${bearerToken}`
            },
            body: JSON.stringify({
                subject,
                content,
                category
            }),
        })
        .then(() => {
            goto( `/${category}`);
        })
        .catch(console.warn)
    }
</script>

<form on:submit={submit}>
    <div class="mb-3">
        <label class="form-label">제목</label>
        <input type="text" class="form-control" bind:value={ subject } />
    </div>
    <div class="mb-3">
        <label class="form-label">내용</label>
        <textarea rows="10" class="form-control" bind:value={ content }></textarea>
    </div>
    <div class="flex flex-row justify-end">
        <button class="btn btn-primary">저장</button>
    </div>
</form>

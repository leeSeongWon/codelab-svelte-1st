<script context="module">
    export async function preload( page ) {
        const { id } = page.params;
        const response = await this.fetch( `http://127.0.0.1:3333/articles/${id}` );
        const article = await response.json();
        return {
            article,
            url: `https://${page.host}${page.path}`
        }
    }
</script>

<script>
    import ArticleView from '../../components/views/articles/ArticleView.svelte'

    export let article;
    export let url;
</script>

<ArticleView {article} {url}/>

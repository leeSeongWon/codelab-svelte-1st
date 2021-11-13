<script context="module">
    export async function preload() {
        const response = await this.fetch( 'http://127.0.0.1:3333/articles?category=notice');
        const data = await response.json();
        return { articles: data.data };
    }
</script>

<script>
    import ArticleList from '../../components/views/articles/ArticleList.svelte';
    export let articles;
</script>

<ArticleList category="notice" title="공지사항 목록" {articles}/>

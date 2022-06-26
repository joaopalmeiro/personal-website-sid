<script>
    export let url;
</script>

<a href={url} target="_blank" class="flex flex-row items-center gap-1.5 text-sm leading-none"
    ><slot /></a
>

<style>
    a {
        border-radius: 10px;
        padding: 6px 9px 6px 7px;
        border: 1px solid #dddddd;
    }

    a:hover {
        border-color: #cccccc;
    }
</style>
